const dynamodb = require('../../dynamodb')
const logger = require('../../../utils/logger')

const getBookingById = async ({ id }) => {
  logger.info({
    message: 'Getting booking by id',
    id,
  })

  const deps = getBookingById.dependencies()

  const { Item } = await deps.dynamodb.get({
    TableName: process.env.TABLE_BOOKINGS,
    Key: {
      bookingId: id,
    },
  })

  if (!Item) {
    return undefined
  }

  return Item
}

getBookingById.dependencies = () => ({
  dynamodb,
})

module.exports = getBookingById
