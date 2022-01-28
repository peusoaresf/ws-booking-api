const dynamodb = require('../../dynamodb')
const logger = require('../../../utils/logger')

const getUserById = async ({ id }) => {
  logger.info({
    message: 'Getting user by id',
    id,
  })

  const deps = getUserById.dependencies()

  const { Item } = await deps.dynamodb.get({
    TableName: process.env.TABLE_USERS,
    Key: {
      userId: id,
    },
  })

  if (!Item) {
    return undefined
  }

  return Item
}

getUserById.dependencies = () => ({
  dynamodb,
})

module.exports = getUserById
