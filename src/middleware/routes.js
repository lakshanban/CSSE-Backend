const loginController = require('../controllers/loginController').loginController
const { selectItemsByCategoryController, selectItemsBySupplierController, selectItemByCategoryAndSupplierController } = require('../controllers/itemController')
const { getItemsByRequisitionController, addItemToCartController } = require('../controllers/cartController')
const { getAllCategoriesController } = require('../controllers/categoryController')
const { getAllRequisitionByManagerController, getAllRequisitionsController, addRequisitionController } = require('../controllers/requisitionController')
const { addBidsController, getAllBidsBySupplierController, getAllBidsController } = require('../controllers/bidController')
const { getAllSuppliersController, supplierLoginController } = require('../controllers/supplierController')
const { addPaymentController, getAllPaymentsController, getPaymentByIdController } = require('../controllers/paymentController')
const { getAllinvoicesController, getInvoiceByIdController } = require('../controllers/invoiceController')

// this route file holds all the endpoints which applies to the express app

const routes = [
    {
        path: '/login',
        handler: loginController,  //handles the login POST request  receives( usernam: String , password: String)
        method: 'POST'
    },

    {
        path: '/item/getbycategory',
        handler: selectItemsByCategoryController,   //return the items filtered by category . receives(catregory: String)
        method: 'POST'
    },

    {
        path: '/item/getbysuplier',
        handler: selectItemsBySupplierController,  //return the items filtered by supplier . receives(supplier_id: String)
        method: 'POST'
    },

    {
        path: '/item/getbycategoryandsuplier',
        handler: selectItemByCategoryAndSupplierController,  //return the items filtered by supplier and category . receives(category: String, supplier_id: String)
        method: 'POST'
    },

    {
        path: '/cart/additem',
        handler: addItemToCartController,  //add Item to cart . receives(requisition_id: INT, ite,_id: INT)
        method: 'POST'
    },

    {
        path: '/cart/getbyrequisition',
        handler: getItemsByRequisitionController,   //return the item for specified requisition (requisition_id: INT)
        method: 'POST'
    },

    {
        path: '/category/getall',
        handler: getAllCategoriesController,   //return all the categories
        method: 'GET'
    },

    {
        path: '/requisition/getall',
        handler: getAllRequisitionsController,  //return all the requisitions
        method: 'GET'
    },

    {
        path: '/requisition/add',
        handler: addRequisitionController,    //add requisition  receives (manager_id: INT, status: String, description: String , due_date: Date)
        method: 'POST'
    },

    {
        path: '/requisition/getbymanager',
        handler: getAllRequisitionByManagerController,  // return all the requistions by manager. recceives(manager_id: INT)
        method: 'POST'
    },

    {
        path: '/bid/getall',
        handler: getAllBidsController,        //return all the requisitions
        method: 'GET'
    },

    {
        path: '/bid/getallbysupplier',
        handler: getAllBidsBySupplierController,  // return all the bids by supplier. receives(supplier_id: INT)
        method: 'POST'
    },

    {
        path: '/bid/add',
        handler: addBidsController,     // add bids .. receives(transport_cost: double, amount: double, description: String, supplierId: INT, requisition_id: INT)
        method: 'POST'
    },

    {
        path: '/supplier/login',
        handler: supplierLoginController,
        method: 'POST'
    },

    {
        path: '/supplier/getall',
        handler: getAllSuppliersController,    //return all the suppliers
        method: 'GET'
    },

    {
        path: '/payment/getall',
        handler: getAllPaymentsController,     //return all the payments
        method: 'GET'
    },

    {
        path: '/payment/getbyid',
        handler: getPaymentByIdController,      //return payment details by id . receives(payment_id: INT)
        method: 'POST'
    },

    {
        path: '/payment/addpayment',
        handler: addPaymentController,          //add payment details. receives(payee: INT, payer: INT, remark: String, date: Date)
        method: 'POST'
    },

    {
        path: '/invoice/getall',
        handler: getAllinvoicesController,        //return all the Invoices details
        method: 'GET'
    },

    {
        path: '/invoice/getbyid',
        handler: getInvoiceByIdController,         //return Invoice details by id . receives(invoice_id: INT )
        method: 'POST'
    },
]

module.exports = { routes } 