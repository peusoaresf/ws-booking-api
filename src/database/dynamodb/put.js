const dynamoClient = require('./dynamo-client')

const put = async (params) => {
  await dynamoClient.put(params).promise()
}

module.exports = put
