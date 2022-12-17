const Joi = require('joi')
const helper = require('./helper')

const bookSchema = Joi.object({
  title: Joi.string().alphanum().trim().required(),

  shortDescription: Joi.string().alphanum().max(128).trim().optional(),

  longDescription: Joi.string().alphanum().min(128).trim().optional(),

  year: Joi.number().integer().max(helper.getCurrentYear()),

  isbn: Joi.string().alphanum().trim().required(),

  price: Joi.number().min(0).required(),
})

const validateBook = async (req, res, next) => {
  const book = req.body
  try {
    await bookSchema.validateAsync(book)
    next()
  } catch (error) {
    next(error)
  }
}

module.exports = validateBook
