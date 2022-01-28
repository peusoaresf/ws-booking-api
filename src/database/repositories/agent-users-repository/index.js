const getByAgentId = require('./get-by-agent-id')
const getByAgentIdAndUserId = require('./get-by-agent-id-and-user-id')

const agentUsersRepository = {
  getByAgentId,
  getByAgentIdAndUserId,
}

module.exports = agentUsersRepository
