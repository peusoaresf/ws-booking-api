const query = require('./query')

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
