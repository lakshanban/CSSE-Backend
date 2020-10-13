const express = require('express')
const applyMiddleware = require('./utils').applyMiddleware
const applyROutes = require('./utils').applyRoutes
const app = express()
const { loginService } = require('./services/loginService')

applyMiddleware(app)
applyROutes(app)

app.listen(3001, () => {
    console.log('server is running on port 3001')
})

