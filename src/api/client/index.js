const apiFactory = require('../commons/api-factory')
const getAllAgentsController = require('../../controllers/get-all-agents-controller')
const deleteBookingController = require('../../controllers/delete-booking-controller')

const api = apiFactory((app) => {
  app.get('/agents', getAllAgentsController)
  app.delete('/booking/:id', deleteBookingController)
}, { basePath: '/client' })

module.exports = {
  handler: api,
}
