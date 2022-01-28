const { ADMIN } = require('./commons/roles')
const hasRole = require('./commons/has-role')
const agentsRepository = require('../database/repositories/agents-repository')

const getAllAgentsController = async (req, res, next) => {
  try {
    const result = await agentsRepository.getAllAgents({
      ExclusiveStartKey: req.query.lastItem,
    })

    res.json(result)
  } catch (err) {
    next(err)
  }
}

module.exports = [hasRole(ADMIN), getAllAgentsController]
