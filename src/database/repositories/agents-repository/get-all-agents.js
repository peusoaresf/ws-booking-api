const dynamodb = require('../../dynamodb')

const getAllAgents = async ({
  ExclusiveStartKey,
} = {}) => {
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
