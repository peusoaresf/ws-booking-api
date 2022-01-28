const express = require('express')
const serverless = require('serverless-http')
const errorMiddleware = require('./error-middleware')

const apiFactory = (applyRouting, { basePath }) => {
  const app = express()

  app.use(express.urlencoded({ extended: true }))
  app.use(express.json())

  applyRouting(app)

  errorMiddleware(app)

  return serverless(app, { basePath })
}

module.exports = apiFactory
