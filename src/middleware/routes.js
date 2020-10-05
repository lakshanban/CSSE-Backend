const login = require('../controllers/loginController').login


const routes = [
    {
        path: '/',
        handler: login,
        method: 'GET'
    }
]

module.exports = {routes}