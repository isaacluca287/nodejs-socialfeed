// config/auth.js
module.exports = {
  'development': {
    'facebook': {
      'consumerKey': '666754823500137',
      'consumerSecret': '2cb3e3c87c4a4d412bb8dc4c65468e35',
      'callbackUrl': 'http://social-authenticator.com:8000/auth/facebook/callback'
    },
    'twitter': {
      'consumerKey': '9SQsSH71e4jEKStpLKsb3LVJv',
      'consumerSecret': '58dcKbej8t7arB3WG0zaP0BicEElNoF1moFjO3gDDdtV6sC2Pe',
      'callbackUrl': 'http://social-authenticator.com:8000/auth/twitter/callback'
    }//,
    // 'google': {
    //   'consumerKey': '446585441765-unda5mjs6307q1pqobvhiqj87m9m2kh1.apps.googleusercontent.com',
    //   'consumerSecret': '...',
    //   'callbackUrl': 'http://social-authenticator.com:8000/auth/google/callback'
    // }
  }
}
