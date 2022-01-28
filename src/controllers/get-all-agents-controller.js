const { ADMIN } = require('./commons/roles')
const hasRole = require('./commons/has-role')
const agentsRepository = require('../database/repositories/agents-repository')

const getAllAgentsController = async (req, res) => {
  const result = await agentsRepository.getAllAgents()
  res.json(result)
}

module.exports = [hasRole(ADMIN), getAllAgentsController]
