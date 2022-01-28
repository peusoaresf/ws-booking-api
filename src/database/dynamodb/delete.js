const dynamoClient = require('./dynamo-client')

const deleteFn = async (params) => {
  await dynamoClient.delete(params).promise()
}

module.exports = deleteFn
