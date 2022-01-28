const logger = require('../../utils/logger')

const hasRole = (...role) => (req, res, next) => {
  logger.info({
    message: `Checking if user has role ${role}`,
  })
  next()
}

module.exports = hasRole
