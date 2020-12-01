const express = require('express');
const router = express.Router();
const passport = require('passport');
const session = require('express-session');
const { Strategy: TwitterStrategy } = require('passport-twitter');
const Cryptr = require('cryptr');
const Twitter = require('twit');

const { emitUserToClient } = require('../controllers/twitter');
const TWITTER_SECRET = require('../twitter_api.json');

const aesSecretKey = '?E(G+KbPeShVmYq3x/A?D(G-KaPdSgVk4u7x!A%D*G-JaNdRmZq4t7w!z%C*F-J@ShVmYq3t6w9z$C&FaPdSgVkYp3s6v9y$F-JaNdRgUkXp2s5v%C*F)J@NcRfUjXn2w9z$C&E)H@McQfTj3s6v9y$B&E(H+MbQ'
const cryptr = new Cryptr(aesSecretKey);

const BOT_USERID = '1327632404786290688'


// Initialization of Passport and Express Session
router.use(passport.initialize());
router.use(session({ secret: 'usadaKensetsu', key: 'sid', cookie: { secure: true }}));

const TWITTER_CONFIG = {
  consumerKey: TWITTER_SECRET.API,
  consumerSecret: TWITTER_SECRET.SECRET,
  // make sure the call back url matches what was set on Twitter
  // when registering the app
  callbackURL: 'https://127.0.0.1:5000/twitter/twitterAuthorize'
}

const getUserAuthentication = (user, isDecrypted) => new Twitter({
    consumer_key: TWITTER_SECRET.API,
    consumer_secret: TWITTER_SECRET.SECRET,
    access_token: isDecrypted ? user.$$_4CCSST : cryptr.decrypt(user.$$_4CCSST),
    access_token_secret: isDecrypted ? user.$_Aces_TOEe3t : cryptr.decrypt(user.$_Aces_TOEe3t)
});

passport.serializeUser((user, cb) => cb(null, user))
passport.deserializeUser((obj, cb) => cb(null, obj))

// Basic setup with passport and Twitter
passport.use(new TwitterStrategy(
  TWITTER_CONFIG, (accessToken, refreshToken, profile, callback) => {
    getUserAuthentication(
      {
        $$_4CCSST: accessToken, 
        $_Aces_TOEe3t: refreshToken
      }, true)
      .get('friendships/show', {source_id: profile.id, target_id: BOT_USERID})
      .then(result => {
        const user = {
          id: profile.id,
          name: profile.displayName,
          photo: profile.photos[0].value.replace(/_normal/, ''),
          username: profile.username,
          followingBot: result.data.relationship.target.followed_by || false,
          // These will not be used in front end but will be stored in cache, therefore the variable names are abstract
          $_Aces_TOEe3t: cryptr.encrypt(refreshToken),
          $$_4CCSST: cryptr.encrypt(accessToken)
        }
        callback(null, user)
      })
      .catch(err => {
        console.log('caught error', err.stack)
        throw err;
      });
  })
)

// Middleware that triggers the PassportJs authentication process
const twitterAuth = passport.authenticate('twitter');


// This custom middleware picks off the socket id (that was put on req.query)
// and stores it in the session so we can send back the right info to the 
// right socket
const addSocketIdToSession = (req, res, next) => {
  req.session.socketId = req.query.socketId
  console.log('adding socket to session:', req.query.socketId)
  next()
}

// This is endpoint triggered by the popup on the client which starts the whole
// authentication process
router.get('/twitterAuth', addSocketIdToSession, twitterAuth)


// This is the endpoint that Twitter sends the user information to. 
// The twitterAuth middleware attaches the user to req.user and then
// the user info is sent to the client via the socket id that is in the 
// session. 
router.get('/twitterAuthorize', twitterAuth, (req, res) => {
  console.log('Twitter authorization provided. SocketId:', req.session.socketId, 'twitterUser:', req.user)
  emitUserToClient(req.session.socketId, req.user)
  res.end()
})

router.post('/logoutUser', (req, res) => {
  const user = req.body
  const userAuth = getUserAuthentication(user)
  userAuth.post('oauth/invalidate_token', {}, (error, profile, response) => {
    res.send({success: response.statusCode === 200})
  })
})

module.exports = router;