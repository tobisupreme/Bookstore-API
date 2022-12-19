const { auth } = require('express-openid-connect')
const CONFIG = require('../config/config')

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: CONFIG.SECRET,
  baseURL: CONFIG.BASEURL,
  clientID: CONFIG.CLIENTID,
  issuerBaseURL: CONFIG.ISSUERBASEURL,
}

module.exports = auth(config)
