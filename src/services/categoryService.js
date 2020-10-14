const databaseService = require('./databaseService').QueryDatabase

const getAllCategories = async () => {
    const result = await databaseService('SELECT * FROM category')
    return result;
}

module.exports = {
    getAllCategories
}