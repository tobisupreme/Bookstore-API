function errorHandler(error, req, res, next) {
  console.log('🚀 ~ file: errorHandler.js:2 ~ error', error)

  if (error.name === 'MongoServerError' && error.code === 11000) {
    return next(res.status(400).send(`${Object.keys(error.keyValue)[0]} must be unique`))
  }

  if (error.name === 'ValidationError') {
    return next(res.status(400).send(error.details[0].message))
  }

  res.status(error.status || 500).send('Something broke')
  next()
}

module.exports = errorHandler
