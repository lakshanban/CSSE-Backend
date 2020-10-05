const { loginService } = require('../services/loginService')

const login = async(req, res) => {
    const result = await loginService(req.body.username, req.body.password)
    console.log(result)
    if(result){
        res.status(200).json({
            loginResult: true,
            userData: result[0]
        })
    }
    
}

module.exports = {
    login
}