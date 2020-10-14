const { addItemToCart, getItemsByRequisition } = require('../services/cartService')

const addItemToCartController = async (req, res) => {
    const itemId = req.body.itemId
    const requisitionId = req.body.requisitionId
    const qty = req.body.quantity

    addItemToCart(itemId, requisitionId, qty)
    res.send('sucessfully added')
}

const getItemsByRequisitionController = async (req, res) => {
    const reqId = req.body.requisitionId
    const result = await getItemsByRequisition(reqId)

    res.status(200).json(result)
}

module.exports = {
    addItemToCartController,
    getItemsByRequisitionController
}