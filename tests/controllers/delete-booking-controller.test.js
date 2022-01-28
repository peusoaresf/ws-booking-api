// eslint-disable-next-line no-unused-vars
const [_, deleteBookingController] = require('../../src/controllers/delete-booking-controller')

test('should delete booking successfully', async () => {
  const req = {
    params: { id: 1 },
  }

  const res = {
    status: jest.fn(() => res),
    end: jest.fn(),
  }

  const bookingsRepository = {
    deleteBooking: jest.fn().mockResolvedValueOnce(),
  }

  deleteBookingController.dependencies = () => ({
    bookingsRepository,
  })

  await deleteBookingController(req, res)

  expect(bookingsRepository.deleteBooking).toHaveBeenNthCalledWith(1, {
    id: 1,
  })
  expect(res.status).toHaveBeenNthCalledWith(1, 204)
  expect(res.end).toBeCalledTimes(1)
})
