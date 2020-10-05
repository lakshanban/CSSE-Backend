const login = require('../controllers/loginController').login
const { reqConGetAllRequests, reqConGetRequestById, reqConGetRequestByCreator } = require('../controllers/requestController')


const routes = [
    {
        path: '/login',
        handler: login,                        // receives username and password
        method: 'POST'
    },

    {
        path: '/getallrequests',
        handler: reqConGetAllRequests,
        method: 'GET'
    },

    {
        path: '/getreqbyid',
        handler: reqConGetRequestById,         // receives RID (request ID)
        method: 'POST'
    },

    {
        path: '/getreqbycreator',
        handler: reqConGetRequestByCreator,    // receives cid (creator id)
        method: 'POST'
    }
]

module.exports = {routes} 