const dynamodb = require('../../dynamodb')
const logger = require('../../../utils/logger')

const createBooking = async (booking) => {
  logger.info({
    message: 'Creating booking',
    booking,
  })

  const deps = createBooking.dependencies()

  return deps.dynamodb.put({
    TableName: process.env.TABLE_BOOKINGS,
    Item: booking,
  })
}

createBooking.dependencies = () => ({
  dynamodb,
})

module.exports = createBooking
