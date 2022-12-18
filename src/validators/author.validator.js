const Joi = require('joi')

const newAuthorSchema = Joi.object({
  firstName: Joi.string().alphanum().trim().required(),

  lastName: Joi.string().alphanum().trim().required(),

  dob: Joi.date().optional(),

  country: Joi.string().trim().optional(),

  books: Joi.array().items(Joi.string().length(24)).optional(),
})

const updateAuthorSchema = Joi.object({
  firstName: Joi.string().alphanum().trim().optional(),

  lastName: Joi.string().alphanum().trim().optional(),

  dob: Joi.date().optional(),

  country: Joi.string().trim().optional(),

  books: Joi.array().items(Joi.string().length(24)).optional(),
})

const validateNewAuthor = async (req, res, next) => {
  const author = req.body
  try {
    await newAuthorSchema.validateAsync(author)
    next()
  } catch (error) {
    next(error)
  }
}

const validateAuthorUpdate = async (req, res, next) => {
  const author = req.body
  try {
    await updateAuthorSchema.validateAsync(author)
    next()
  } catch (error) {
    next(error)
  }
}

module.exports = {
  validateNewAuthor,
  validateAuthorUpdate,
}
