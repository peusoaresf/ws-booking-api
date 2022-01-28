const dynamodb = require('../../dynamodb')
const logger = require('../../../utils/logger')

const deleteBooking = async ({ id }) => {
  logger.info({
    message: 'Deleting booking',
    id,
  })

  const deps = deleteBooking.dependencies()

  await deps.dynamodb.delete({
    TableName: process.env.TABLE_BOOKINGS,
    Key: {
      bookingId: id,
    },
  })
}

deleteBooking.dependencies = () => ({
  dynamodb,
})

module.exports = deleteBooking
