const createBooking = require('./create-booking')
const deleteBooking = require('./delete-booking')
const getBookingById = require('./get-booking-by-id')
const getBookingsByStartAt = require('./get-bookings-by-start-at')

const bookingsRepository = {
  createBooking,
  deleteBooking,
  getBookingById,
  getBookingsByStartAt,
}

module.exports = bookingsRepository
