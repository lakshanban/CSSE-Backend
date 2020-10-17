const { getAllSuppliers, supplierLogin } = require('../services/supplierService')

const getAllSuppliersController = async (req, res) => {
    const result = await getAllSuppliers();
    res.status(200).json(result);
}

const supplierLoginController = async (req, res) => {
    const email = req.body.email
    const password = req.body.password
    const result = await supplierLogin(email, password)

    res.status(200).json(result);
}

module.exports = {
    getAllSuppliersController,
    supplierLoginController
}