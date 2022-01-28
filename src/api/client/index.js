const apiFactory = require('../commons/api-factory')
const getAllAgentsController = require('../../controllers/get-all-agents-controller')

const api = apiFactory((app) => {
  app.get('/agents', getAllAgentsController)
}, { basePath: '/client' })

module.exports = {
  handler: api,
}
