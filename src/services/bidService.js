const databaseService = require('./databaseService').QueryDatabase

const addBids = async (amount, description, requisitionId, supplierId) => {
    const result = await databaseService(`INSERT INTO bid VALUES(${Math.random()},${amount}, '${description}', ${requisitionId}, ${supplierId},'pending')`)
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

const getBidById = async (bidId) => {
    const result = await databaseService(`SELECT * FROM bid WHERE bidId = ${bidId}`)
    return result;
}

const updateBidStautus = async (bid_id, status) => {
    if (status === 'approved') {
        const bidDetials = await getBidById(bid_id);
        databaseService(`INSERT INTO purchased values(${Math.random()},${bidDetials[0].supplierId},${bidDetials[0].transport_cost}, ${bidDetials[0].amount},${bidDetials[0].requisitionId}, '${bidDetials[0].description}')`)
        const result = await databaseService(`DELETE FROM bid WHERE bidId = ${bid_id}`)
        await databaseService(`UPDATE requisition SET status='completed' WHERE requisition_id=${bidDetials[0].requisitionId} '`)
        return "succesfully updated"
    } else {
        const result = await databaseService(`UPDATE bid SET status='${status} WHERE bidId =${bid_id}'`);
        return "succesfully updated"
    }

}

const getAllFromPurchased = async () => {
    const result = await databaseService('SELECT * FROM purchased')
    return result;
}

module.exports = {
    addBids,
    getAllBids,
    getAllBidsBySupplier,
    updateBidStautus,
    getAllFromPurchased
}