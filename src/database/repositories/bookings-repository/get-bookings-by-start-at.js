const dynamodb = require('../../dynamodb')
const logger = require('../../../utils/logger')

const getBookingsByStartAt = async ({
  startAt,
  ExclusiveStartKey,
}) => {
  logger.info({
    message: 'Getting bookings by start at',
    startAt,
    ExclusiveStartKey,
  })

  const deps = getBookingsByStartAt.dependencies()

  const endDate = new Date(startAt)
  endDate.setDate(endDate.getDate() + 6)

  const { Items, LastEvaluatedKey } = await deps.dynamodb.paginatedQuery({
    TableName: process.env.TABLE_BOOKINGS,
    IndexName: 'status_startAtUnique_gsi',
    KeyConditionExpression: '#status = :status and startAtUnique between :start and :end',
    ExpressionAttributeNames: {
      '#status': 'status',
    },
    ExpressionAttributeValues: {
      ':status': 'ACTIVE',
      ':start': startAt,
      ':end': endDate.toISOString(),
    },
    ExclusiveStartKey,
  })

  return {
    items: Items,
    lastItem: LastEvaluatedKey,
  }
}

getBookingsByStartAt.dependencies = () => ({
  dynamodb,
})

module.exports = getBookingsByStartAt
