const express = require('express')
const applyMiddleware = require('./utils').applyMiddleware
const applyROutes = require('./utils').applyRoutes
const app = express()
const { QueryDatabase } = require('./services/databaseService')

applyMiddleware(app)
applyROutes(app)

app.listen(3001, () => {
    console.log('server is running on port 3001')
})


// const {loginService} = require('./services/loginService')
// const run = async() => {
//     const result = await loginService('LakshanBandara', 'P1010')
//     console.log(result)
// }

// run()