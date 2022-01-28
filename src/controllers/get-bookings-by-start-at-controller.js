const { ADMIN, REGULAR } = require('./commons/roles')
const hasRole = require('./commons/has-role')
const bookingsRepository = require('../database/repositories/bookings-repository')

const createBookingController = async (req, res, next) => {
  try {
    const deps = createBookingController.dependencies()

    const result = await deps.bookingsRepository.getBookingsByStartAt({
      startAt: req.query.week,
    })

    res.json(result)
  } catch (err) {
    next(err)
  }
}

createBookingController.dependencies = () => ({
  bookingsRepository,
})

module.exports = [hasRole(ADMIN, REGULAR), createBookingController]
