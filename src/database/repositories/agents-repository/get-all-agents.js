const agentsMock = [
  {
    name: 'Agent Smith',
    email: 'agent@smith.com',
  }
]

const getAllAgents = async ({
  ExclusiveStartKey,
} = {}) => {
  const deps = getAllAgents.dependencies() 

  const { Items, LastEvaluatedKey } = await deps.dynamodb.scan({
    TableName: process.env.TABLE_AGENTS,
    Limit: 10,
    ExclusiveStartKey,
  })

  return {
    items: Items,
    lastItem: LastEvaluatedKey,
  }
}

getAllAgents.dependencies = () => ({
  dynamodb: {
    scan: () => Promise.resolve({ Items: agentsMock, LastEvaluatedKey: 'lala' }),
  }
})

module.exports = getAllAgents