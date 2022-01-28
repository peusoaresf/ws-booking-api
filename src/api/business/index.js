const apiFactory = require('../commons/api-factory')
const getAllAgentsController = require('../../controllers/get-all-agents-controller')

const api = apiFactory((app) => {
  app.get('/agents', getAllAgentsController)
}, { basePath: '/business' })

module.exports = {
  handler: api,
}
