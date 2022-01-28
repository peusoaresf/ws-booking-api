const logger = require('../../utils/logger')

const routeNotFoundHandler = (req, res, next) => {
  const error = new Error('Route not found')
  error.status = 404
  error.name = 'RouteNotFoundError'
  next(error)
}

// eslint-disable-next-line no-unused-vars
const errorHandler = (err, req, res, next) => {
  const error = {
    name: err.name || 'UnknownError',
    status: err.status || 500,
    message: err.message,
    details: err.details || undefined,
  }

  logger.error({
    message: 'Request error',
    error,
  })

  res.status(error.status).json(error)
}

const errorMiddleware = (app) => {
  app.use(routeNotFoundHandler)
  app.use(errorHandler)
}

module.exports = errorMiddleware
