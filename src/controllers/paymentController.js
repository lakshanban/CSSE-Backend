const databaseService = require('../services/databaseService')
const { addPayment, getAllPayments, getPaymentById } = require('../services/paymentService')

const addPaymentController = async (req, res) => {
    const payee = req.body.payee
    const payment_date = req.body.payment_date
    const payer = req.body.payer
    const payed_on = req.body.payed_on
    const remark = req.body.remark
    const invoice = req.body.invoice
    const result = await addPayment(payee, payment_date, payer, payed_on, remark, invoice)
    res.status(200).json(result)
}

const getAllPaymentsController = async (req, res) => {
    const result = await getAllPayments()
    res.status(200).json(result)
}

const getPaymentByIdController = async (req, res) => {
    const payment_id = req.body.payment_id
    console.log(payment_id)
    const result = await getPaymentById(payment_id)

    res.status(200).json(result)
}


module.exports = {
    addPaymentController,
    getAllPaymentsController,
    getPaymentByIdController
}
