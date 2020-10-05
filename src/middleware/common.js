const parser = require('body-parser')
const cors = require('cors')

const handleCors = (router) => {
    router.use(cors({credentials: true, origin:true}))
}

const handleParser = (router) => {
    router.use(parser.urlencoded({extended: true}))
    router.use(parser.json())
}

module.exports = {
    handleCors,
    handleParser
}