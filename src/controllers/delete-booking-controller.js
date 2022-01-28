const { ADMIN } = require('./commons/roles')
const hasOneOf = require('./commons/has-one-of')
const deleteBookingUC = require('../use-cases/delete-booking-uc')

const deleteBookingController = async (req, res, next) => {
  try {
    const deps = deleteBookingController.dependencies()

    await deps.deleteBookingUC({
      bookingId: req.params.id,
    })

    res.status(204).end()
  } catch (err) {
    next(err)
  }
}

deleteBookingController.dependencies = () => ({
  deleteBookingUC,
})

module.exports = [hasOneOf(ADMIN), deleteBookingController]
