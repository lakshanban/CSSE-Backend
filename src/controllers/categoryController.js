const { getAllCategories } = require('../services/categoryService')

// handle the requests to fetch all the categories
const getAllCategoriesController = async (req, res) => {
    const result = await getAllCategories();

    res.status(200).json(result)
}

// exports the controller to use in routes.js file
module.exports = {
    getAllCategoriesController
}