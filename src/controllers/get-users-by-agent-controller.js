const { ADMIN, REGULAR } = require('./commons/roles')
const hasOneOf = require('./commons/has-one-of')
const agentUsersRepository = require('../database/repositories/agent-users-repository')

const getUsersByAgentController = async (req, res, next) => {
  const deps = getUsersByAgentController.dependencies()

  try {
    const result = await deps.agentUsersRepository.getByAgentId({
      agentId: req.agentId,
      ExclusiveStartKey: req.query.lastItem,
    })

    res.json(result)
  } catch (err) {
    next(err)
  }
}

getUsersByAgentController.dependencies = () => ({
  agentUsersRepository,
})

module.exports = [hasOneOf(ADMIN, REGULAR), getUsersByAgentController]
