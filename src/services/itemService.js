const databaseService = require('./databaseService').QueryDatabase

const selectItemsByCategory = async (categoryId) => {
    const itemList = await databaseService(`SELECT * FROM item WHERE category_id =${categoryId}`)
    return itemList;
}

const selectItemsBySupplier = async (supplierId) => {
    const itemList = await databaseService(`SELECT * FROM item WHERE suplier=${supplierId}`)
    return itemList;
}

const selectItemByCategoryAndSupplier = async (categoryId, supplierId) => {
    const itemList = await databaseService(`SELECT * FROM item WHERE category_id =${categoryId} AND suplier=${supplierId} `)
    return itemList;
}

module.exports = {
    selectItemsByCategory,
    selectItemsBySupplier,
    selectItemByCategoryAndSupplier
}