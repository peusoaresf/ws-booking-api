const { ADMIN } = require('./commons/roles')
const hasRole = require('./commons/has-role')
const bookingsRepository = require('../database/repositories/bookings-repository')

const createBookingController = async (req, res, next) => {
  try {
    const deps = createBookingController.dependencies()

    await deps.bookingsRepository.createBooking({
      userId: req.body.userId,
      agentId: req.agentId,
      startAt: req.body.startAt,
      finishAt: req.body.finishAt,
    })

    res.status(204).end()
  } catch (err) {
    next(err)
  }
}

createBookingController.dependencies = () => ({
  bookingsRepository,
})

module.exports = [hasRole(ADMIN), createBookingController]
