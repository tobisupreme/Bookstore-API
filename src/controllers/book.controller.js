const Book = require('../models/Book')

/**
 * @description Add a book to the database
 */
const createBook = async (req, res, next) => {
  try {
    const savedBook = await Book.create(req.body)
    return res.status(201).json(savedBook)
  } catch (error) {
    next(error)
  }
}

/**
 * @description Get books from the database
 */
const getBooks = async (req, res, next) => {
  try {
    const books = await Book.find({})
    res.status(200).json({ books })
  } catch (error) {
    next(error)
  }
}

/**
 * @description Get specific book from the database
 */
const getBookById = async (req, res, next) => {
  const { id } = req.params
  try {
    const book = await Book.findById(id)
    res.status(200).json({ book })
  } catch (error) {
    next(error)
  }
}

/**
 * @description Update a book in the database
 */
const updateBookById = async (req, res, next) => {
  const { id } = req.params
  const payload = { ...req.body, updatedAt: Date.now() }
  try {
    const updatedBook = await Book.findByIdAndUpdate(id, payload, {
      new: true,
      runValidators: true,
      context: 'query',
    })
    return res.status(200).json(updatedBook)
  } catch (error) {
    next(error)
  }
}

/**
 * @description Delete a book from the database
 */
const deleteBookById = async (req, res, next) => {
  const { id } = req.params
  try {
    const deletedBook = await Book.findByIdAndDelete(id)
    return res.status(204).json(deletedBook)
  } catch (error) {
    next(error)
  }
}

module.exports = {
  createBook,
  getBooks,
  getBookById,
  updateBookById,
  deleteBookById,
}
