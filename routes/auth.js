const express = require('express');
const router = express.Router();
const passport = require('passport');
const Cryptr = require('cryptr');
const cryptr = new Cryptr(process.env.AES_SECRET);
const Twitter = require('twit');
const { URLSearchParams } = require('url');
const { default: fetch } = require('node-fetch');
const { uploadImage } = require('../controllers/imgur')


// Setting up the passport middleware for each of the OAuth providers
const twitterAuth = passport.authenticate('twitter');
const googleAuth = passport.authenticate('google', { scope: ['email', 'profile'] });
const facebookAuth = passport.authenticate('facebook');


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


const logoutUser = async(req, res) => {
  const user = req.body
  let statusCode;

  if(user.provider === 'twitter') {

    const userAuth = new Twitter({
      consumer_key: process.env.TWITTER_API,
      consumer_secret: process.env.TWITTER_SECRET,
      access_token: cryptr.decrypt(user.$$_4CCSST),
      access_token_secret: cryptr.decrypt(user.$_Aces_TOEe3t)
    })

    response = await userAuth.post('oauth/invalidate_token')
    statusCode = response.statusCode === 200

  }else if(user.provider === 'google') {

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams().append('token', cryptr.decrypt(user.$$_4CCSST))
    };

    response = await fetch(`https://oauth2.googleapis.com/revoke`, requestOptions)
    statusCode = response.status === 200

  }else if(user.provider === 'facebook') {

    const urlParams = new URLSearchParams()
    urlParams.append('access_token', cryptr.decrypt(user.$$_4CCSST))
    urlParams.append('method', 'delete')

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=UTF-8' },
      body: urlParams
    };
    response = await fetch(`https://graph.facebook.com/v9.0/${user.id}/permissions`, requestOptions)
    statusCode = response.status === 200
  }

  req.logout();
  res.send({success: statusCode});
}

// Route to logout user
router.post('/logoutUser', logoutUser)

// Route to Generate Peko Card
// For this one, we will save the user in DB first before
// continuing to logout
router.post('/generatePekoCard', (req, res) => {
  const { imageUri, user } = req.body;
  console.log('Triggered Generate Pekocard: ' + user.name);
  
  const idPromise = uploadImage(imageUri, user);
  idPromise.then(id => {
    const secret = user.name + '_' + id;
    res.send({generatedID: secret});
  })

})

router.post('/getUserDetails', (req, res) => {
  try{
    if(!req.body.pekoCardId) {
      throw error;
    }

    const pekoCardId = req.body.pekoCardId;
    // getUser(pekoCardId)
      // .then(user => {
      //   console.log(user)
      //   if(user) {
      //     res.send({success: true, user: user})
      //   }else {
      //     throw error;
      //   }
      // })
      // .catch(error => console.log(error.message))

    // if(userSecret.provider === 'twitter') {

    // } else if(userSecret.provider === 'google') {

    // } else if(userSecret.provider === 'facebook') {

    // }


  } catch(e) {
    // We should keep the error anonymous to prevent
    // attacks from getting the error message,
    // but we should still log the error
    console.error(e)
    console.error(e.message)
    res.send({success: false})
  }


})

module.exports = router