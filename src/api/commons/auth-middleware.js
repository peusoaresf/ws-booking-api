const authMiddleware = (req, res, next) => {
  const agentId = req.headers['x-agent-id']

  if (!req.headers['x-agent-id']) {
    const message = 'Authentication header is missing'

    const error = new Error(message)
    error.status = 401
    error.name = 'AuthenticationHeaderMissingError'

    return next(error)
  }

  req.agentId = agentId

  next()
}

module.exports = authMiddleware
