const apiFactory = require('../commons/api-factory')
const getAllAgentsController = require('../../controllers/get-all-agents-controller')
const deleteBookingController = require('../../controllers/delete-booking-controller')
const createBookingController = require('../../controllers/create-booking-controller')

const api = apiFactory((app) => {
  app.get('/agents', getAllAgentsController)

  app.post('/booking', createBookingController)
  app.delete('/booking/:id', deleteBookingController)
}, { basePath: '/client' })

module.exports = {
  handler: api,
}
