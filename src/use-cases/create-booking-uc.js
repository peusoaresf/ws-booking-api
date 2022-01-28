const { v4 } = require('uuid')
const usersRepository = require('../database/repositories/users-repository')
const agentsRepository = require('../database/repositories/agents-repository')
const bookingsRepository = require('../database/repositories/bookings-repository')
const agentUsersRepository = require('../database/repositories/agent-users-repository')

const createBookingUC = async ({
  userId,
  agentId,
  startAt,
  finishAt,
}) => {
  const deps = createBookingUC.dependencies()

  const user = await deps.usersRepository.getUserById({ id: userId })

  if (!user) {
    throw new Error('User is not found')
  }

  const agent = await deps.agentsRepository.getAgentById({ id: agentId })

  if (!agent) {
    throw new Error('Agent is not found')
  }

  const agentUser = await deps.agentUsersRepository.getByAgentIdAndUserId({ agentId, userId })

  if (!agentUser) {
    throw new Error('Agent is not responsible for user')
  }

  const bookingId = v4()

  const booking = {
    bookingId,
    startAt,
    startAtUnique: `${startAt}-${bookingId}`,
    finishAt,
    user,
    agent,
    status: 'ACTIVE',
  }

  await deps.bookingsRepository.createBooking(booking)

  return booking.id
}

createBookingUC.dependencies = () => ({
  usersRepository,
  agentsRepository,
  bookingsRepository,
  agentUsersRepository,
})

module.exports = createBookingUC
