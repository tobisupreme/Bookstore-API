require('dotenv').config()

const DBURI = process.env.NODE_ENV !== 'test' ? process.env.DBURI : process.env.TESTDBURI

module.exports = {
  PORT: process.env.PORT,
  DBURI,
}
