const express = require('express')
const http = require('http')
const config = require('./config/config.js')
const connectDB = require('./db/mongodb.js')
const errorHandler = require('./middleware/errorHandler')
const apiv1 = require('./routes/index')
const helmet = require('helmet')
const { limiter } = require('./config/rateLimit')
const { requiresAuth } = require('express-openid-connect')
const auth0Config = require('./auth/auth0')

const app = express()

// Middleware
app.use(helmet()) // add security headers || https://www.npmjs.com/package/helmet

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use(auth0Config) // auth0 middleware for authentication

app.get('/', (req, res) => {
  res.send('Bookstore here!')
})

app.use(limiter) // apply rate limiting middleware to all requests

app.use('/api/v1', requiresAuth(), apiv1)

// Use error handling middleware
app.use(errorHandler)

const server = http.createServer(app)
// If a test is run, don't start this server
if (process.env.NODE_ENV !== 'test') {
  server.listen(config.PORT, async () => {
    await connectDB(config.DBURI)
    console.log(`Server is listening on port ${config.PORT}`)
  })
}
