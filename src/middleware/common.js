const parser = require('body-parser')
const cors = require('cors')

// cross platform compatibility middleware
const handleCors = (router) => {
    router.use(cors({ credentials: true, origin: true }))
}

// body parserr middleware
const handleParser = (router) => {
    router.use(parser.urlencoded({ extended: true }))
    router.use(parser.json())
}

module.exports = {
    handleCors,
    handleParser
}