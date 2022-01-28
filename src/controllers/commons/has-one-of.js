const agentsRepository = require('../../database/repositories/agents-repository')
const logger = require('../../utils/logger')

const hasOneOf = (...roles) => async (req, res, next) => {
  logger.info({
    message: 'Checking if user has one of roles',
    roles,
    agentId: req.agentId,
  })

  const agent = await agentsRepository.getAgentById({
    id: req.agentId,
  })

  if (!agent) {
    const error = new Error('Agent is not found')
    error.status = 404
    error.name = 'AgentNotFoundError'

    return next(error)
  }

  if (!agent.roles.some(role => roles.includes(role))) {
    const error = new Error('Agent is not allowed to access this resource')
    error.status = 403
    error.name = 'ForbiddenError'

    return next(error)
  }

  next()
}

module.exports = hasOneOf
