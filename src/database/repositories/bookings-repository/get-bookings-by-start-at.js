const logger = require('../../../utils/logger')

const getBookingsByStartAt = async ({
  startAt,
}) => {
  logger.info({
    message: 'Getting bookings by start at',
    startAt,
  })

  return Promise.resolve([
    {
      start_at: '2022-01-28T12:22:53.367Z',
      finish_at: '2022-01-28T12:22:53.367Z',
      user: {
        name: 'User 1',
        email: 'user1@email.com',
      },
      agent: {
        name: 'Agent 1',
        email: 'agent1@email.com',
      },
    },
    {
      start_at: '2022-01-28T12:22:53.367Z',
      finish_at: '2022-01-28T12:22:53.367Z',
      user: {
        name: 'User 1',
        email: 'user1@email.com',
      },
      agent: {
        name: 'Agent 1',
        email: 'agent1@email.com',
      },
    },
  ])
}

module.exports = getBookingsByStartAt
