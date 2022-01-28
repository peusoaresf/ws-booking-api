const query = require('./query')
const deleteFn = require('./delete')
const paginatedQuery = require('./paginated-query')

const dynamodb = {
  query,
  delete: deleteFn,
  paginatedQuery,
}

module.exports = dynamodb
