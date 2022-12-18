const Joi = require('joi')
const helper = require('./helper')

const newBookSchema = Joi.object({
  title: Joi.string().trim().required(),

  shortDescription: Joi.string().trim().optional(),

  longDescription: Joi.string().min(128).trim().optional(),

  year: Joi.number().integer().max(helper.getCurrentYear()),

  isbn: Joi.string().alphanum().trim().required(),

  price: Joi.number().min(0).required(),
})

const updateBookSchema = Joi.object({
  title: Joi.string().trim().optional(),

  shortDescription: Joi.string().trim().optional(),

  longDescription: Joi.string().min(128).trim().optional(),

  year: Joi.number().integer().max(helper.getCurrentYear()).optional(),

  price: Joi.number().min(0).optional(),
})

const validateNewBook = async (req, res, next) => {
  const book = req.body
  try {
    await newBookSchema.validateAsync(book)
    next()
  } catch (error) {
    next(error)
  }
}

const validateBookUpdate = async (req, res, next) => {
  const book = req.body
  try {
    await updateBookSchema.validateAsync(book)
    next()
  } catch (error) {
    next(error)
  }
}

module.exports = {
  validateNewBook,
  validateBookUpdate,
}
