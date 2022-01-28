const logger = require('../../utils/logger')

const hasOneOf = (...role) => (req, res, next) => {
  logger.info({
    message: `Checking if user has one of roles ${role}`,
  })
  next()
}

module.exports = hasOneOf
