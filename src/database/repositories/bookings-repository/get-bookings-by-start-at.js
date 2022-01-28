const logger = require('../../../utils/logger')

const getBookingByStartAt = async ({
  startAt,
}) => {
  logger.info({
    message: 'Getting bookings by start at',
    startAt,
  })
}

module.exports = getBookingByStartAt
