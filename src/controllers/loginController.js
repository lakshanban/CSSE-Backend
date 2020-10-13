const loginService = require('../services/loginService').loginService

const loginController = async (req, res) => {
    console.log(req)
    const result = await loginService(req.body.email, req.body.password)
    res.send(result)
}

module.exports = {
    loginController
}