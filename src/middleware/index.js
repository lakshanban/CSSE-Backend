const handleCors = require('./common').handleCors
const handleParser = require('./common').handleParser
const routers = require('./routes').routes

const middleware = [handleCors, handleParser]
const routes = routers

module.exports = {
    middleware,
    routes
}