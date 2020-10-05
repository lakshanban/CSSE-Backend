const login = require('../controllers/loginController').login


const routes = [
    {
        path: '/login',
        handler: login,
        method: 'POST'
    }
]

module.exports = {routes}