const { getAllinvoices, getInvoiceById } = require('../services/invoiceService')


const getAllinvoicesController = async (req, res) => {
    const result = await getAllinvoices();
    res.status(200).json(result)
}

const getInvoiceByIdController = async (req, res) => {
    const invoice_id = req.body.invoice_id
    const result = await getInvoiceById(invoice_id)

    res.status(200).json(result)
}

module.exports = {
    getAllinvoicesController,
    getInvoiceByIdController
}