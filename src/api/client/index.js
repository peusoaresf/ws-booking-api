const express = require('express')
const serverless = require('serverless-http')
const agentsRepository = require('../../database/repositories/agents-repository')

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/hello', async (_, res) => {
  const result = await agentsRepository.getAllAgents()
  res.json(result)
})

module.exports ={
  handler: serverless(app, { basePath: '/client' })
} 