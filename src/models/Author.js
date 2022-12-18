const mongoose = require('mongoose')

const authorSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  dob: {
    type: Date,
  },
  country: {
    type: String,
    required: false,
  },
  books: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Book',
    },
  ],
})

module.exports = mongoose.model('Author', authorSchema)
