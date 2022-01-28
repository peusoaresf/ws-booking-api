const { ADMIN } = require('./commons/roles')
const hasRole = require('./commons/has-role')
const bookingsRepository = require('../database/repositories/bookings-repository')

const deleteBookingController = async (req, res) => {
  await bookingsRepository.deleteBooking({
    id: req.params.id,
  })
  res.status(204).end()
}

module.exports = [hasRole(ADMIN), deleteBookingController]
