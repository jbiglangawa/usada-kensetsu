exports.TWITTER_CONFIG = {
    consumerKey: process.env.TWITTER_API,
    consumerSecret: process.env.TWITTER_SECRET,
    callbackURL: process.env.TWITTER_CALLBACK
}
  
exports.GOOGLE_CONFIG = {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK
}
  

exports.FACEBOOK_CONFIG = {
  clientID: process.env.FACEBOOK_API_KEY,
  clientSecret: process.env.FACEBOOK_SECRET,
  profileFields: ['id', 'displayName', 'picture.type(large)'],
  callbackURL: process.env.FACEBOOK_CALLBACK
}