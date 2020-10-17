const { addItemToCart, getItemsByRequisition } = require('../services/cartService')

// controller handles the add item  requests  [path: item/additem]
const addItemToCartController = async (req, res) => {
    const itemId = req.body.itemId
    const requisitionId = req.body.requisitionId
    const qty = req.body.quantity

    addItemToCart(itemId, requisitionId, qty)
    res.send('sucessfully added')
}

// controller handles the requests to fetch items by passing the requisitions id  [path: item/getbyid]
const getItemsByRequisitionController = async (req, res) => {
    const reqId = req.body.requisitionId
    const result = await getItemsByRequisition(reqId)

    res.status(200).json(result)
}
// expoert the controllers to use inside the routes.js file
module.exports = {
    addItemToCartController,
    getItemsByRequisitionController
}