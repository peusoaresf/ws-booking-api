const express = require('express')
const serverless = require('serverless-http')

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/hello', (_, res) => res.json({ hello: `business-${process.env.STAGE}` }))

module.exports ={
  handler: serverless(app, { basePath: '/business' })
} 