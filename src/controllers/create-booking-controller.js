const { ADMIN } = require('./commons/roles')
const hasRole = require('./commons/has-role')
const createBookingUC = require('../use-cases/create-booking-uc')

const createBookingController = async (req, res, next) => {
  try {
    const deps = createBookingController.dependencies()

    await deps.createBookingUC({
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
  createBookingUC,
})

module.exports = [hasRole(ADMIN), createBookingController]
