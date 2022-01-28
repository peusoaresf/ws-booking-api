const apiFactory = require('../commons/api-factory')
const getAllAgentsController = require('../../controllers/get-all-agents-controller')
const deleteBookingController = require('../../controllers/delete-booking-controller')
const createBookingController = require('../../controllers/create-booking-controller')
const getBookingsByStartAt = require('../../controllers/get-bookings-by-start-at-controller')

const api = apiFactory((app) => {
  app.get('/agents', getAllAgentsController)

  app.get('/booking', getBookingsByStartAt)
  app.post('/booking', createBookingController)
  app.delete('/booking/:id', deleteBookingController)
}, { basePath: '/client' })

module.exports = {
  handler: api,
}
