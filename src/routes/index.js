const express = require('express')
const router = express.Router()
const bookRouter = require('./books')

/**
 * @description Router for book related endpoints
 * @route /api/v1/books
 */
router.use('/books', bookRouter)

module.exports = router
