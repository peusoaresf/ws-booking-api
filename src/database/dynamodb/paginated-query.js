const query = require('./query')

// TODO: decode ExclusiveStartKey from base64 and encode LastEvaluatedKey to base64
const paginatedQuery = async ({
  ExclusiveStartKey,
  Limit = 10,
  ...params
}) => {
  const deps = paginatedQuery.dependencies()

  const { Items, LastEvaluatedKey } = await deps.query({
    Limit,
    ExclusiveStartKey,
    ...params,
  })

  return {
    Items,
    LastEvaluatedKey,
  }
}

paginatedQuery.dependencies = () => ({
  query,
})

module.exports = paginatedQuery
