const { getAllRequests, getRequestById, getRequestByCreator } = require('../services/requestService')

const  reqConGetAllRequests = async(req, res) => {
     const results = await getAllRequests();
     res.status(200).json(results)
}

const reqConGetRequestById = async( req, res) => {
     const results = await getRequestById(req.body.id) 
     res.status(200).json(results)
}

const reqConGetRequestByCreator = async( req, res) => {
    const results = await getRequestByCreator(req.body.cid) 
    res.status(200).json(results)
}



module.exports = {
    reqConGetAllRequests,
    reqConGetRequestById,
    reqConGetRequestByCreator
}