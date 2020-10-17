const { selectItemsByCategory, selectItemsBySupplier, selectItemByCategoryAndSupplier } = require('../services/itemService')

// handles the requests to fetch items by category requests path: [item/getbycategory]
const selectItemsByCategoryController = async (req, res) => {
    const categoryId = req.body.categoryId
    const result = await selectItemsByCategory(categoryId)
    res.status(200).json(result);
}

// handles the requests to fetch items by supplier requests path: [item/getbysupplier]
const selectItemsBySupplierController = async (req, res) => {
    const suplierId = req.body.suplierId
    const result = await selectItemsBySupplier(suplierId)
    res.status(200).json(result);
}

// handles the requests to fetch items by category and supplier requests path: [item/getbycategoryandsupplier]
const selectItemByCategoryAndSupplierController = async (req, res) => {
    const categoryId = req.body.categoryId
    const suplierId = req.body.suplierId
    const result = await selectItemByCategoryAndSupplier(categoryId, suplierId)
    res.status(200).json(result);
}

module.exports = {
    selectItemsByCategoryController,
    selectItemsBySupplierController,
    selectItemByCategoryAndSupplierController
}