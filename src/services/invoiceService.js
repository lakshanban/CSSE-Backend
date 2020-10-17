const databaseService = require('./databaseService').QueryDatabase

const addInvoice = async (title, description, document) => {
    const result = await databaseService(`INSERT INTO invoice VALUES(${Math.random()},'${title}', '${description}', '${document}')`)
    return {
        result: "invoice added sucessfully"
    }
}

const getAllinvoices = async () => {
    const result = await databaseService('SELECT * FROM invoice')
    return result;
}

const getInvoiceById = async (invoice_id) => {
    const result = await databaseService(`SELECT * FROM invoice WHERE invoice_id =${invoice_id} `)
    return result;
}

module.exports = {
    addInvoice,
    getAllinvoices,
    getInvoiceById
}