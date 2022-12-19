require('dotenv').config()

const DBURI =
  process.env.NODE_ENV !== 'test' ? process.env.DBURI : process.env.TESTDBURI
const SECRET = process.env.SECRET
const BASEURL = process.env.BASEURL
const CLIENTID = process.env.CLIENTID
const ISSUERBASEURL = process.env.ISSUERBASEURL

module.exports = {
  PORT: process.env.PORT,
  DBURI,
  SECRET,
  BASEURL,
  CLIENTID,
  ISSUERBASEURL,
}
