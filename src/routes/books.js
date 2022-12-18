const router = require('express').Router()
const { validateNewBook, validateBookUpdate } = require('../validators/book.validator')
const bookController = require('../controllers/book.controller')

/**
 * @description Add a book to the database
 * @route /api/v1/books
 * @method POST
 */
router.route('/').post(validateNewBook, bookController.createBook)

/**
 * @description Get books from the database
 * @route /api/v1/books
 * @method GET
 */
router.route('/').get(bookController.getBooks)

/**
 * @description Get specific book from the database
 * @route /api/v1/books/:id
 * @method GET
 */
router
  .route('/:id')
  .get(bookController.getBookById)

/**
 * @description Update a book in the database
 * @route /api/v1/books/:id
 * @method PATCH
 */
  .patch(validateBookUpdate, bookController.updateBookById)

/**
 * @description Delete a book from the database
 * @route /api/v1/books/:id
 * @method DELETE
 */
  .delete(bookController.deleteBookById)

module.exports = router
