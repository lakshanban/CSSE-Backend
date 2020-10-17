const loginController = require('../controllers/loginController').loginController
const { selectItemsByCategoryController, selectItemsBySupplierController, selectItemByCategoryAndSupplierController } = require('../controllers/itemController')
const { getItemsByRequisitionController, addItemToCartController } = require('../controllers/cartController')
const { getAllCategoriesController } = require('../controllers/categoryController')
const { getAllRequisitionByManagerController, getAllRequisitionsController, addRequisitionController } = require('../controllers/requisitionController')
const { addBidsController, getAllBidsBySupplierController, getAllBidsController } = require('../controllers/bidController')
const { getAllSuppliersController, supplierLoginController } = require('../controllers/supplierController')
const { addPaymentController, getAllPaymentsController, getPaymentByIdController } = require('../controllers/paymentController')
const { getAllinvoicesController, getInvoiceByIdController } = require('../controllers/invoiceController')

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
    },

    {
        path: '/category/getall',
        handler: getAllCategoriesController,
        method: 'GET'
    },

    {
        path: '/requisition/getall',
        handler: getAllRequisitionsController,
        method: 'GET'
    },

    {
        path: '/requisition/add',
        handler: addRequisitionController,
        method: 'POST'
    },

    {
        path: '/requisition/getbymanager',
        handler: getAllRequisitionByManagerController,
        method: 'POST'
    },

    {
        path: '/bid/getall',
        handler: getAllBidsController,
        method: 'GET'
    },

    {
        path: '/bid/getallbysupplier',
        handler: getAllBidsBySupplierController,
        method: 'POST'
    },

    {
        path: '/bid/add',
        handler: addBidsController,
        method: 'POST'
    },

    {
        path: '/supplier/login',
        handler: supplierLoginController,
        method: 'POST'
    },

    {
        path: '/supplier/getall',
        handler: getAllSuppliersController,
        method: 'GET'
    },

    {
        path: '/payment/getall',
        handler: getAllPaymentsController,
        method: 'GET'
    },

    {
        path: '/payment/getbyid',
        handler: getPaymentByIdController,
        method: 'POST'
    },

    {
        path: '/payment/addpayment',
        handler: addPaymentController,
        method: 'POST'
    },

    {
        path: '/invoice/getall',
        handler: getAllinvoicesController,
        method: 'GET'
    },

    {
        path: '/invoice/getbyid',
        handler: getInvoiceByIdController,
        method: 'POST'
    },
]

module.exports = { routes } 