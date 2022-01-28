const apiFactory = require('../commons/api-factory')
const getAllAgentsController = require('../../controllers/get-all-agents-controller')
const getUsersByAgentController = require('../../controllers/get-users-by-agent-controller')
const getBookingsByStartAt = require('../../controllers/get-bookings-by-start-at-controller')

const api = apiFactory((app) => {
  app.get('/agents', getAllAgentsController)

  app.get('/users', getUsersByAgentController)


  app.get('/booking', getBookingsByStartAt)
}, { basePath: '/business' })

module.exports = {
  handler: api,
}
