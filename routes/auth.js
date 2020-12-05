const express = require('express');
const router = express.Router();
const passport = require('passport');
const Cryptr = require('cryptr');
const cryptr = new Cryptr(process.env.AES_SECRET);

// Setting up the passport middleware for each of the OAuth providers
const twitterAuth = passport.authenticate('twitter');
const googleAuth = passport.authenticate('google', { scope: ['email', 'profile'] });
const facebookAuth = passport.authenticate('facebook');

const Twitter = require('twit');

const authorizeCallback = (req, res) => {
  console.log('Authorization provided. SocketId:', req.session.socketId, 'user:', req.user)
  const io = req.app.get('io')
  io.in(req.session.socketId).emit('user', req.user)
  
  if(req.user.provider === 'facebook') {
    res.render('successLogin');
  }else {
    res.end()
  }
}

// Routes that are triggered by the callbacks from each OAuth provider once 
// the user has authenticated successfully
router.get('/twitterAuthorize', twitterAuth, authorizeCallback)
router.get('/googleAuthorize', googleAuth, authorizeCallback)
router.get('/facebookAuthorize', facebookAuth, authorizeCallback)

// This custom middleware allows us to attach the socket id to the session
// With that socket id we can send back the right user info to the right 
// socket
router.use((req, res, next) => {
  req.session.socketId = req.query.socketId
  next()
})

// Routes that are triggered on the client
router.get('/twitterAuth', twitterAuth)
router.get('/googleAuth', googleAuth)
router.get('/facebookAuth', facebookAuth)

// Route to logout user
router.post('/logoutUser', (req, res) => {
  req.logout();
  res.send('👍');
  // if(user.provider === 'twitter') {
  //   const userAuth = new Twitter({
  //     consumer_key: process.env.TWITTER_API,
  //     consumer_secret: process.env.TWITTER_SECRET,
  //     access_token: cryptr.decrypt(user.$$_4CCSST),
  //     access_token_secret: cryptr.decrypt(user.$_Aces_TOEe3t)
  //   })

  //   userAuth.post('oauth/invalidate_token', {}, (error, profile, response) => {
  //     res.send({success: response.statusCode === 200})
  //   })
  // }
})

module.exports = router