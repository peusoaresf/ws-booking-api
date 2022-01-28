const { ADMIN } = require('./commons/roles')
const hasRole = require('./commons/has-role')
const bookingsRepository = require('../database/repositories/bookings-repository')

const deleteBookingController = async (req, res, next) => {
  try {
    const deps = deleteBookingController.dependencies()

    await deps.bookingsRepository.deleteBooking({
      id: req.params.id,
    })

    res.status(204).end()
  } catch (err) {
    next(err)
  }
}

deleteBookingController.dependencies = () => ({
  bookingsRepository,
})

module.exports = [hasRole(ADMIN), deleteBookingController]
