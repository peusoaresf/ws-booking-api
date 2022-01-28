const dynamoClient = require('./dynamo-client')

const query = async (params) => {
  const deps = query.dependencies()

  const { Items } = await deps.dynamoClient.query(params).promise()

  if (Items === undefined) {
    return { Items: [] }
  }

  return { Items }
}

query.dependencies = () => ({
  dynamoClient,
})

module.exports = query
