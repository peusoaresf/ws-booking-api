const put = require('./put')
const get = require('./get')
const query = require('./query')
const deleteFn = require('./delete')
const paginatedQuery = require('./paginated-query')

const dynamodb = {
  put,
  get,
  query,
  delete: deleteFn,
  paginatedQuery,
}

module.exports = dynamodb
