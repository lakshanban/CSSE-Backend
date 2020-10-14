const loginController = require('../controllers/loginController').loginController
const { selectItemsByCategoryController, selectItemsBySupplierController, selectItemByCategoryAndSupplierController } = require('../controllers/itemController')
const { getItemsByRequisitionController, addItemToCartController } = require('../controllers/cartController')

const routes = [
    {
        path: '/login',
        handler: loginController,
        method: 'POST'
    },

    {
        path: '/item/getbycategory',
        handler: selectItemsByCategoryController,
        method: 'POST'
    },

    {
        path: '/item/getbysuplier',
        handler: selectItemsBySupplierController,
        method: 'POST'
    },

    {
        path: '/item/getbycategoryandsuplier',
        handler: selectItemByCategoryAndSupplierController,
        method: 'POST'
    },

    {
        path: '/cart/additem',
        handler: addItemToCartController,
        method: 'POST'
    },

    {
        path: '/cart/getbyrequisition',
        handler: getItemsByRequisitionController,
        method: 'POST'
    }
]

module.exports = { routes } 