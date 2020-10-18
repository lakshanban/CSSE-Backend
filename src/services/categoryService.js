const databaseService = require('./databaseService').QueryDatabase

// return all the categories
const getAllCategories = async () => {
    const result = await databaseService('SELECT * FROM category')
    return result;
}

module.exports = {
    getAllCategories
}

/*

*/