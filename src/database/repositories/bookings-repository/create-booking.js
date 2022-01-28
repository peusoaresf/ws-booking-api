const logger = require('../../../utils/logger')

const createBooking = async ({
  userId,
  agentId,
  startAt,
  finishAt,
}) => {
  logger.info({
    message: 'Creating booking',
    booking: {
      userId,
      agentId,
      startAt,
      finishAt,
    },
  })
}

module.exports = createBooking
