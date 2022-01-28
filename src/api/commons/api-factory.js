const express = require('express')
const serverless = require('serverless-http')
const authMiddleware = require('./auth-middleware')
const errorMiddleware = require('./error-middleware')

const apiFactory = (applyRouting, { basePath }) => {
  const app = express()

  app.use(express.urlencoded({ extended: true }))
  app.use(express.json())

  app.use(authMiddleware)

  applyRouting(app)

  errorMiddleware(app)

  return serverless(app, { basePath })
}

module.exports = apiFactory
