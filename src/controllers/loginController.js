const loginService = require('../services/loginService').loginService

// handles the login function of the mobile and the web app . path [/login]
const loginController = async (req, res) => {
    console.log(req)
    const result = await loginService(req.body.email, req.body.password)
    res.status(200).json(result)
}

// exports the login controller to use inside the route.js
module.exports = {
    loginController
}