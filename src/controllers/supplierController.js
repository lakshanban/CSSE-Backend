const { getAllSuppliers, supplierLogin } = require('../services/supplierService')

// handles the  GET requests to fetch all the supplier details path: [supplier/getall]
const getAllSuppliersController = async (req, res) => {
    const result = await getAllSuppliers();
    res.status(200).json(result);
}

// handles the  POST request to login as a supplier to the system: [supplier/getall]
const supplierLoginController = async (req, res) => {
    const email = req.body.email
    const password = req.body.password
    const result = await supplierLogin(email, password)

    res.status(200).json(result);
}

// exports the supplier controller to use inside the routes.js
module.exports = {
    getAllSuppliersController,
    supplierLoginController
}