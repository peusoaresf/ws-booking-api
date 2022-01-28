const { ADMIN } = require('./commons/roles')
const hasOneOf = require('./commons/has-one-of')
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

module.exports = [hasOneOf(ADMIN), getAllAgentsController]
