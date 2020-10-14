const databaseService = require('./databaseService').QueryDatabase

const getAllCategories = async () => {
    const result = await databaseService('SELECT * FROM categoty')
    return result;
}

module.exports = {
    getAllCategories
}