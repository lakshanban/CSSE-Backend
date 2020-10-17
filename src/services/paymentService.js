const databaseService = require('./databaseService').QueryDatabase

const addPayment = async (payee, payment_date, payer, payed_on, remark, invoice) => {
    const result = await databaseService(`INSERT INTO payment VALUES(${Math.random()}, ${payee}, '${payment_date}', '${payer}','${payed_on}', '${remark}', ${invoice})`)
    return {
        result: "added data successfully"
    }
}

const getAllPayments = async () => {
    const result = await databaseService(`SELECT * FROM payment`)

    return result;
}

const getPaymentById = async (payment_id) => {
    const result = await databaseService(`SELECT * FROM payment WHERE payment_id=${payment_id}`)
    return result
}

module.exports = {
    addPayment,
    getAllPayments,
    getPaymentById
}
