function errorHandler(error, req, res, next) {
  console.log('🚀 ~ file: errorHandler.js:2 ~ error', error)

  if (error.name === 'ValidationError') {
    return next(res.status(400).send(error.details[0].message))
  }

  res.send(error.status || 500, 'Something broke')
  next()
}

module.exports = errorHandler
