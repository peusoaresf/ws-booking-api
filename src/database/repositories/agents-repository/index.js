const getAllAgents = require('./get-all-agents')
const getAgentById = require('./get-agent-by-id')

const agentsRepository = {
  getAllAgents,
  getAgentById,
}

module.exports = agentsRepository
