const dynamoClient = require('./dynamo-client')

const get = async (params) => dynamoClient.get(params).promise()

module.exports = get
