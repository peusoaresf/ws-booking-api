const apiFactory = require('../commons/api-factory')
const agentsRepository = require('../../database/repositories/agents-repository')

const api = apiFactory((app) => {
  app.get('/hello', async (_, res) => {
    const result = await agentsRepository.getAllAgents()
    res.json(result)
  })
}, { basePath: '/client' })

module.exports = {
  handler: api,
}
