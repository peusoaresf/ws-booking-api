const dynamodb = require('../../dynamodb')
const logger = require('../../../utils/logger')

const getAgentById = async ({ id }) => {
  logger.info({
    message: 'Getting agent by id',
    id,
  })

  const deps = getAgentById.dependencies()

  const { Item } = await deps.dynamodb.get({
    TableName: process.env.TABLE_AGENTS,
    Key: {
      agentId: id,
    },
  })

  if (!Item) {
    return undefined
  }

  return Item
}

getAgentById.dependencies = () => ({
  dynamodb,
})

module.exports = getAgentById
