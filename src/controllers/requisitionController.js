const e = require('express')
const { addRequisition, getAllRequisitionByManager, getAllRequisitions } = require('../services/requisitionService')

// handles the POST requests add new requisitions . path :[requisitions/add]
const addRequisitionController = async (req, res) => {
    const manager = req.body.manager
    const status = "pending"
    const type = "single"
    const site = req.body.site
    const storeLocation = req.body.storeLocation
    const dueDate = req.body.dueDate

    const result = await addRequisition(manager, status, type, site, storeLocation, dueDate)

    res.status(200).send('Requisiton added successfully')

}

// handles the GET requsts to fetch all the requistion details path :[requisition/getall]
const getAllRequisitionsController = async (req, res) => {
    const result = await getAllRequisitions()
    res.status(200).json(result)
}

// handles the GET requsts to fetch all the requistion details by passing the requisiotion id path :[requisition/getbyid]
const getAllRequisitionByManagerController = async (req, res) => {
    const manager = req.body.manager
    const result = await getAllRequisitionByManager(manager)

    res.status(200).json(result)
}

//exports the controllers to use inside the routes.js
module.exports = {
    addRequisitionController,
    getAllRequisitionByManagerController,
    getAllRequisitionsController
}