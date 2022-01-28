const dynamodb = require('../../dynamodb')
const logger = require('../../../utils/logger')

const getByAgentId = async ({
  agentId,
  ExclusiveStartKey,
}) => {
  logger.info({
    message: 'Getting agent\'s users by agent id',
    agentId,
  })

  const deps = getByAgentId.dependencies()

  const { Items, LastEvaluatedKey } = await deps.dynamodb.paginatedQuery({
    TableName: process.env.TABLE_AGENT_USERS,
    ExclusiveStartKey,
    KeyConditionExpression: 'agentId = :agentId',
    ExpressionAttributeValues: {
      ':agentId': agentId,
    },
  })

  return {
    items: Items,
    lastItem: LastEvaluatedKey,
  }
}

getByAgentId.dependencies = () => ({
  dynamodb,
})

module.exports = getByAgentId
