const loginController = require('../controllers/loginController').loginController

const routes = [
    {
        path: '/login',
        handler: loginController,
        method: 'POST'
    }
]

module.exports = { routes } 