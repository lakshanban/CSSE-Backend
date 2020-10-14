const { selectItemsByCategory, selectItemsBySupplier, selectItemByCategoryAndSupplier } = require('../services/itemService')

const selectItemsByCategoryController = async (req, res) => {
    const categoryId = req.body.categoryId
    const result = await selectItemsByCategory(categoryId)
    res.status(200).json(result);
}

const selectItemsBySupplierController = async (req, res) => {
    const suplierId = req.body.suplierId
    const result = await selectItemsBySupplier(suplierId)
    res.status(200).json(result);
}

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