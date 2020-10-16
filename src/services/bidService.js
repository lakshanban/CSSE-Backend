const databaseService = require('./databaseService').QueryDatabase

const addBids = async (amount, description, requisitionId, supplierId) => {
    const result = await databaseService(`INSERT INTO bid VALUES(${Math.random()},${amount}, '${description}', ${requisitionId}, ${supplierId})`)
    return {
        result: "added sucessfully"
    }
}

const getAllBids = async () => {
    const result = await databaseService('SELECT * FROM bid')
    return result
}

const getAllBidsBySupplier = async (supplierId) => {
    const result = await databaseService(`SELECT * FROM bid WHERE supplierId = ${supplierId}`)
    return result;
}

module.exports = {
    addBids,
    getAllBids,
    getAllBidsBySupplier
}