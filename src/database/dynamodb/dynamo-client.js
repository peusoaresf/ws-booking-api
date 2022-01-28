const AWS = require('aws-sdk')

let dynamoClient

if (process.env.STAGE === 'local') {
  dynamoClient = new AWS.DynamoDB.DocumentClient({
    region: 'localhost',
    endpoint: 'http://localhost:8000',
    accessKeyId: 'DEFAULT_ACCESS_KEY',
    secretAccessKey: 'DEFAULT_SECRET',
  })
}
else {
  dynamoClient = new AWS.DynamoDB.DocumentClient()
}

module.exports = dynamoClient
