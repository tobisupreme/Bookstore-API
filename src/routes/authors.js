const router = require('express').Router()
const { validateNewAuthor, validateAuthorUpdate } = require('../validators/author.validator')
const authorController = require('../controllers/author.controller')

/**
 * @description Add an author to the database
 * @route /api/v1/authors
 * @method POST
 */
router.route('/').post(validateNewAuthor, authorController.createAuthor)

/**
 * @description Get authors from the database
 * @route /api/v1/authors
 * @method GET
 */
router.route('/').get(authorController.getAuthors)

/**
 * @description Get specific author from the database
 * @route /api/v1/authors/:id
 * @method GET
 */
router
  .route('/:id')
  .get(authorController.getAuthorById)

/**
 * @description Update a book in the database
 * @route /api/v1/authors/:id
 * @method PATCH
 */
  .patch(validateAuthorUpdate, authorController.updateAuthorById)

/**
 * @description Delete a book from the database
 * @route /api/v1/authors/:id
 * @method DELETE
 */
  .delete(authorController.deleteAuthorById)

module.exports = router
