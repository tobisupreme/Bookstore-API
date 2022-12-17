function errorHandler(error, req, res, next) {
  console.log('🚀 ~ file: errorHandler.js:2 ~ error', error)

  res.send(error.status || 500, 'Something broke')
  next()
}

module.exports = errorHandler
