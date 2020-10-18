const databaseService = require('./databaseService').QueryDatabase

// add new bids
const addBids = async (amount, description, requisitionId, supplierId) => {
    const result = await databaseService(`INSERT INTO bid VALUES(${Math.random()},${amount}, '${description}', ${requisitionId}, ${supplierId},'pending')`)
    return {
        result: "added sucessfully"
    }
}

// return all the bids details
const getAllBids = async () => {
    const result = await databaseService('SELECT * FROM bid')
    return result
}

// filter bids by supplier ID
const getAllBidsBySupplier = async (supplierId) => {
    const result = await databaseService(`SELECT * FROM bid WHERE supplierId = ${supplierId}`)
    return result;
}

// filter bids by bidID
const getBidById = async (bidId) => {
    const result = await databaseService(`SELECT * FROM bid WHERE bidId = ${bidId}`)
    return result;
}

// update the bid status and if status is approved then remove it from the bids table and add it to the purchased table
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

// return all the purchased details from the purchased table
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