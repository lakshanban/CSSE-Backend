const { getAllinvoices, getInvoiceById } = require('../services/invoiceService')

// handles the requests to fetch all the invoces path [invoice/getall]
const getAllinvoicesController = async (req, res) => {
    const result = await getAllinvoices();
    res.status(200).json(result)
}
// handles the requests to fetch invoice by passing the id  [invoice/getbyid]
const getInvoiceByIdController = async (req, res) => {
    const invoice_id = req.body.invoice_id
    const result = await getInvoiceById(invoice_id)

    res.status(200).json(result)
}

// exports the controller functions to use inside the routes.js file
module.exports = {
    getAllinvoicesController,
    getInvoiceByIdController
}