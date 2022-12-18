const router = require('express').Router()
const { validateNewBook, validateBookUpdate } = require('../validators/book.validator')
const Book = require('../models/Book')

/**
 * @description Add a book to the database
 * @route /api/v1/books
 * @method POST
 */
router.route('/').post(validateNewBook, async (req, res, next) => {
  try {
    const savedBook = await Book.create(req.body)
    return res.status(201).json(savedBook)
  } catch (error) {
    next(error)
  }
})

/**
 * @description Get books from the database
 * @route /api/v1/books
 * @method GET
 */
router.route('/').get(async (req, res, next) => {
  try {
    const books = await Book.find({})
    res.status(200).json({ books })
  } catch (error) {
    next(error)
  }
})

/**
 * @description Get specific book from the database
 * @route /api/v1/books/:id
 * @method GET
 */
router
  .route('/:id')
  .get(async (req, res, next) => {
    const { id } = req.params
    try {
      const book = await Book.findById(id)
      res.status(200).json({ book })
    } catch (error) {
      next(error)
    }
  })

/**
 * @description Update a book in the database
 * @route /api/v1/books/:id
 * @method PATCH
 */
  .patch(validateBookUpdate, async (req, res, next) => {
    const { id } = req.params
    const payload = { ...req.body, updatedAt: Date.now() }
    try {
      const updatedBook = await Book.findByIdAndUpdate(id, payload, { new: true, runValidators: true, context: 'query' })
      return res.status(200).json(updatedBook)
    } catch (error) {
      next(error)
    }
  })

/**
 * @description Delete a book from the database
 * @route /api/v1/books/:id
 * @method DELETE
 */
  .delete(async (req, res, next) => {
    const { id } = req.params
    try {
      const deletedBook = await Book.findByIdAndDelete(id)
      return res.status(204).json(deletedBook)
    } catch (error) {
      next(error)
    }
  })

module.exports = router
