const dynamodb = require('../../dynamodb')
const logger = require('../../../utils/logger')

const getByAgentIdAndUserId = async ({
  agentId,
  userId,
}) => {
  logger.info({
    message: 'Getting agent\'s user by agent id and user id',
    agentId,
    userId,
  })

  const deps = getByAgentIdAndUserId.dependencies()

  const { Item } = await deps.dynamodb.get({
    TableName: process.env.TABLE_AGENT_USERS,
    Key: {
      agentId,
      userId,
    },
  })

  if (!Item) {
    return undefined
  }

  return Item
}

getByAgentIdAndUserId.dependencies = () => ({
  dynamodb,
})

module.exports = getByAgentIdAndUserId
