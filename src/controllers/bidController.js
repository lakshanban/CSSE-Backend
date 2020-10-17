const { addBids, getAllBids, getAllBidsBySupplier } = require('../services/bidService')

// controller handles the addBids requests  [path: bid/addbid]
const addBidsController = async (req, res) => {
    const amount = req.body.amount
    const description = req.body.description
    const requisitionId = req.body.requisitionId
    const supplierId = req.body.supplierId

    const result = await addBids(amount, description, requisitionId, supplierId)

    res.status(200).json(result)
}
// controller handles the request to fetch all the bids [path: bid/getall]
const getAllBidsController = async (req, res) => {
    const result = await getAllBids();

    res.status(200).json(result)
}

// controller handles the request to fetch a bid by passing the id [path: bid/getbyid]
const getAllBidsBySupplierController = async (req, res) => {
    const supplierId = req.body.supplierId
    const result = await getAllBidsBySupplier(supplierId)

    res.status(200).json(result)
}

// exporting the modules to use inside the routes.js file.
module.exports = {
    getAllBidsBySupplierController,
    getAllBidsController,
    addBidsController
}