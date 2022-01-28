const createBooking = require('./create-booking')
const deleteBooking = require('./delete-booking')
const getBookingByStartAt = require('./get-bookings-by-start-at')

const bookingsRepository = {
  createBooking,
  deleteBooking,
  getBookingByStartAt,
}

module.exports = bookingsRepository
