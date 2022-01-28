const express = require('express')
const serverless = require('serverless-http')

const apiFactory = (applyRouting, { basePath }) => {
  const app = express()

  app.use(express.urlencoded({ extended: true }))
  app.use(express.json())

  applyRouting(app)

  return serverless(app, { basePath })
}

module.exports = apiFactory