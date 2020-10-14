const e = require('express')
const { addRequisition, getAllRequisitionByManager, getAllRequisitions } = require('../services/requisitionService')

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

const getAllRequisitionsController = async (req, res) => {
    const result = await getAllRequisitions()
    res.status(200).json(result)
}

const getAllRequisitionByManagerController = async (req, res) => {
    const manager = req.body.manager
    const result = await getAllRequisitionByManager(manager)

    res.status(200).json(result)
}

module.exports = {
    addRequisitionController,
    getAllRequisitionByManagerController,
    getAllRequisitionsController
}