const passport = require('passport');
const Cryptr = require('cryptr');
const { Strategy: TwitterStrategy } = require('passport-twitter');
const { OAuth2Strategy: GoogleStrategy } = require('passport-google-oauth');
const { Strategy: FacebookStrategy } = require('passport-facebook');
const { TWITTER_CONFIG, GOOGLE_CONFIG, FACEBOOK_CONFIG } = require('./config');

const cryptr = new Cryptr(process.env.AES_SECRET);
const fetch = require('node-fetch');
const randomatic = require('randomatic');

const generateEmployeeId = () => randomatic('0', 10)

const generateUser = (profile, accessToken, refreshToken) => ({
  provider: profile.provider,
  id: profile.id,
  name: profile.displayName,
  photo: profile.photo,
  username: profile.username,
  $_Aces_TOEe3t: refreshToken && cryptr.encrypt(refreshToken),
  $$_4CCSST: cryptr.encrypt(accessToken),
  employeeID: generateEmployeeId()
})

module.exports = () => {  
  passport.serializeUser((user, cb) => cb(null, user))
  passport.deserializeUser((obj, cb) => cb(null, obj))
  
  passport.use(new TwitterStrategy(TWITTER_CONFIG, (accessToken, refreshToken, profile, callback) => {
    callback(null, generateUser({
      ...profile,
      photo: profile.photos[0].value.replace(/_normal/, '')
    }, accessToken, refreshToken))
  }))

  passport.use(new GoogleStrategy(GOOGLE_CONFIG, (accessToken, refreshToken, profile, callback) => {
    callback(null, generateUser({
      ...profile,
      photo: profile.photos[0].value.replace(/sz=50/gi, 'sz=250'),
      username: null
    }, accessToken))
  }))

  passport.use(new FacebookStrategy(FACEBOOK_CONFIG, (accessToken, refreshToken, profile, callback) => {
    const trigger = async () => {
      const image = await fetch(profile.photos[0].value);
      const buffer = await image.buffer();
      const base64data = buffer.toString('base64');
      
      callback(null, generateUser({
        ...profile,
        photo: `data:image/png;base64, ${base64data}`,
        username: null
      }, accessToken))
    }

    trigger()
  }))
}