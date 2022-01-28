const dynamodb = require('../../dynamodb')
const logger = require('../../../utils/logger')

const getAllAgents = async ({
  ExclusiveStartKey,
} = {}) => {
  logger.info({
    message: 'Getting all agents',
    ExclusiveStartKey,
  })

  const deps = getAllAgents.dependencies()

  const { Items, LastEvaluatedKey } = await deps.dynamodb.paginatedQuery({
    TableName: process.env.TABLE_AGENTS,
    ExclusiveStartKey,
    IndexName: 'status_gsi',
    KeyConditionExpression: '#status = :status',
    ExpressionAttributeNames: {
      '#status': 'status',
    },
    ExpressionAttributeValues: {
      ':status': 'ACTIVE',
    },
  })

  return {
    items: Items,
    lastItem: LastEvaluatedKey,
  }
}

getAllAgents.dependencies = () => ({
  dynamodb,
})

module.exports = getAllAgents
