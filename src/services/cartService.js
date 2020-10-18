const databaseService = require('./databaseService').QueryDatabase

// add new item to the cart
const addItemToCart = async (itemId, requisitionId, qty) => {
    const result = await databaseService(`INSERT INTO cart VALUES(${itemId}, ${requisitionId}, ${qty} )`)
}

// filter items by requisition ID
const getItemsByRequisition = async (requisitionId) => {
    const result = await databaseService(`SELECT * FROM CART WHERE requisition_id = ${requisitionId}`)
    return result;
}

module.exports = {
    addItemToCart,
    getItemsByRequisition
}