const express = require('express')
const router = express.Router()
const bookRouter = require('./books')
const authorRouter = require('./authors')

/**
 * @description Router for book related endpoints
 * @route /api/v1/books
 */
router.use('/books', bookRouter)

/**
 * @description Router for author related endpoints
 * @route /api/v1/authors
 */
router.use('/authors', authorRouter)

module.exports = router
