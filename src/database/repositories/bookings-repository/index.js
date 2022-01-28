const createBooking = require('./create-booking')
const deleteBooking = require('./delete-booking')
const getBookingsByStartAt = require('./get-bookings-by-start-at')

const bookingsRepository = {
  createBooking,
  deleteBooking,
  getBookingsByStartAt,
}

module.exports = bookingsRepository
