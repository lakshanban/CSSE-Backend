const databaseService = require('./databaseService').QueryDatabase

const addItemToCart = async (itemId, requisitionId, qty) => {
    const result = await databaseService(`INSERT INTO cart VALUES(${itemId}, ${requisitionId}, ${qty} )`)
}

const getItemsByRequisition = async (requisitionId) => {
    const result = await databaseService(`SELECT * FROM CART WHERE requisition_id = ${requisitionId}`)
    return result;
}

module.exports = {
    addItemToCart,
    getItemsByRequisition
}