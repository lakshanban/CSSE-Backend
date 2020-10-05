const middleware = require('../middleware').middleware
const routes = require('../middleware').routes


const applyMiddleware = (router) => {
    for(let addMiddleware of middleware){
        addMiddleware(router)
    }
}

const applyRoutes = (router) => {
    for(let route of routes){
        const { method, path, handler } = route;
        if(method === 'GET'){
             router.get(path, handler)
        }
        if(method === 'POST'){
            router.post(path, handler)
        }
    }
}

module.exports = {
    applyMiddleware,
    applyRoutes
}