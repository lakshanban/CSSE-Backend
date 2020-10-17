/**
 * Author : Lakshan Bandara
 * Sri lanka Institute of Information Technology
 */


const applyMiddleware = require('./utils').applyMiddleware
const applyROutes = require('./utils').applyRoutes
const express = require('express')
const multer = require('multer')
const addInvoice = require('./services/invoiceService').addInvoice

// handling invoices pdf
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads/')
    },
    filename: (req, file, cb) => {
        cb(null, new Date().toISOString().replace(/:/g, '-') + file.originalname)
    }
})


// setting file filters 
const upload = multer({
    storage: storage, limits: {
        fileSize: 1024 * 1024 * 10
    }
})

const app = express()
const { loginService } = require('./services/loginService')

// applying middlewares to the express app
applyMiddleware(app)
app.use('/uploads', express.static('uploads'))

//applying all the routes to the express app
applyROutes(app)

//server start listening on the port
app.listen(3001, () => {
    console.log('server is running on port 3001')
})

//invoice file uploads handler 
app.post('/invoice/add', upload.single('document'), async (req, res) => {
    const title = req.body.title
    const description = req.body.description
    const document = req.file.path
    const result = await addInvoice(title, description, document);
    res.status(200).json(result)
})

