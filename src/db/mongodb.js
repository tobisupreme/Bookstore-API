const mongoose = require('mongoose')

mongoose.set('strictQuery', true)

async function connectDB(DBURI) {
  try {
    await mongoose.connect(DBURI)
    console.log('Connection successful')
  } catch (error) {
    console.error(error)
  }
}

module.exports = connectDB
