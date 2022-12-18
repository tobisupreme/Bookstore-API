const mongoose = require('mongoose')

const bookSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  shortDescription: {
    type: String,
    required: false,
  },
  longDescription: {
    type: String,
    requried: false,
  },
  year: {
    type: Number,
    required: true,
    max: [new Date().getFullYear(), 'We do not store future books, sorry'],
  },
  isbn: {
    type: String,
    required: true,
    unique: [true, 'ISBN must be unique'],
  },
  price: {
    type: Number,
    required: true,
    min: [0, 'Price must be greater than 0'],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  updatedAt: {
    type: Date,
    default: null,
  },
})

module.exports = mongoose.model('Book', bookSchema)
