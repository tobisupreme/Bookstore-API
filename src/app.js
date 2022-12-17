const express = require('express')
const http = require('http')
const config = require('./config/config.js')
const connectDB = require('./db/mongodb.js')
const errorHandler = require('./middleware/errorHandler')

const app = express()

// Middleware
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Bookstore here!')
})

// Use error handling middleware
app.use(errorHandler)

const server = http.createServer(app)
// If a test is run, don't start this server
if (process.env.NODE_ENV !== 'test') {
  server.listen(config.PORT, async () => {
    await connectDB(config.DBURI)
    console.log(`Server is listening on port ${config.PORT}`)
  }
  )
}
