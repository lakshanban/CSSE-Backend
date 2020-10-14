const databaseService = require('./databaseService').QueryDatabase

const getAllRequisitionByManager = async (userId) => {
    const result = await databaseService(`SELECT * FROM single_requisition WHERE manager = ${userId}`)
    return result;
}

const getAllRequisitions = async () => {
    const result = await databaseService(`SELECT * FROM single_requisition`)
    return result;
}

const addRequisition = async (manager, status, type, site, storeLocation, dueDate) => {
    const result = await databaseService(`INSERT INTO single_requisition VALUES(${Math.random()},${manager}, '${status}', '${type}',${site}, '${storeLocation}', '${dueDate}')`)
}

module.exports = {
    getAllRequisitionByManager,
    getAllRequisitions,
    addRequisition
}