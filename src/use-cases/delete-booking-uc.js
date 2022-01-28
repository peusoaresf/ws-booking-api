const bookingsRepository = require('../database/repositories/bookings-repository')

const deleteBookingUC = async ({ bookingId }) => {
  const deps = deleteBookingUC.dependencies()

  const booking = await deps.bookingsRepository.getBookingById({
    id: bookingId,
  })

  if (!booking) {
    throw new Error('Booking is not found')
  }

  await deps.bookingsRepository.deleteBooking({
    id: bookingId,
  })
}

deleteBookingUC.dependencies = () => ({
  bookingsRepository,
})

module.exports = deleteBookingUC
