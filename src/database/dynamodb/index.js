const query = require('./query')
const paginatedQuery = require('./paginated-query')

const dynamodb = {
  query,
  paginatedQuery,
}

module.exports = dynamodb
