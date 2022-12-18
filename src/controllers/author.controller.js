const Author = require('../models/Author')

/**
 * @description Add an author to the database
 */
const createAuthor = async (req, res, next) => {
  try {
    const savedAuthor = await Author.create(req.body)
    return res.status(201).json(savedAuthor)
  } catch (error) {
    next(error)
  }
}

/**
 * @description Get authors from the database
 */
const getAuthors = async (req, res, next) => {
  try {
    const authors = await Author.find({}).populate('books')
    res.status(200).json({ authors })
  } catch (error) {
    next(error)
  }
}

/**
 * @description Get specific author from the database
 */
const getAuthorById = async (req, res, next) => {
  const { id } = req.params
  try {
    const author = await Author.findById(id)
    res.status(200).json({ author })
  } catch (error) {
    next(error)
  }
}

/**
 * @description Update a book in the database
 */
const updateAuthorById = async (req, res, next) => {
  const { id } = req.params
  const payload = { ...req.body, updatedAt: Date.now() }
  try {
    const updatedAuthor = await Author.findByIdAndUpdate(id, payload, {
      new: true,
      runValidators: true,
      context: 'query',
    })
    return res.status(200).json(updatedAuthor)
  } catch (error) {
    next(error)
  }
}

/**
 * @description Delete a book from the database
 */
const deleteAuthorById = async (req, res, next) => {
  const { id } = req.params
  try {
    const deletedAuthor = await Author.findByIdAndDelete(id)
    return res.status(204).json(deletedAuthor)
  } catch (error) {
    next(error)
  }
}

module.exports = {
  createAuthor,
  getAuthors,
  getAuthorById,
  updateAuthorById,
  deleteAuthorById,
}
