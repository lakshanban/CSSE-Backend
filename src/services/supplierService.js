const databaseService = require('./databaseService').QueryDatabase

const getAllSuppliers = async () => {
    const result = await databaseService('SELECT * FROM supplier')
    return result;
}

const supplierLogin = async (email, password) => {
    const result = await databaseService(`SELECT * FROM supplier WHERE email = '${email}' and password = '${password}'`)
    return result
}


module.exports = {
    getAllSuppliers,
    supplierLogin
}