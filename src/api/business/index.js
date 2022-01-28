const apiFactory = require('../commons/api-factory')

const api = apiFactory((app) => {
  app.get('/hello', (_, res) => res.json({ hello: `business-${process.env.STAGE}` }))
}, { basePath: '/business' })

module.exports = {
  handler: api
}