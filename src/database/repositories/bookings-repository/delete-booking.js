const logger = require('../../../utils/logger')

const deleteBooking = async ({ id }) => {
  logger.info({
    message: 'Deleting booking',
    id,
  })
}

module.exports = deleteBooking
