const { ADMIN, REGULAR } = require('./commons/roles')
const hasOneOf = require('./commons/has-one-of')
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

module.exports = [hasOneOf(ADMIN, REGULAR), createBookingController]
