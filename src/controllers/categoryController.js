const { getAllCategories } = require('../services/categoryService')

const getAllCategoriesController = async (req, res) => {
    const result = await getAllCategories();

    res.status(200).json(result)
}

module.exports = {
    getAllCategoriesController
}