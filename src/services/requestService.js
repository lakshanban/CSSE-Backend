const { QueryDatabase } = require('./databaseService')

const getAllRequests = async() => {
    const result = QueryDatabase('SELECT * FROM REQUESTS')
    let resultRes = result.then(res=> {
        return res
    }).catch(error=>{
        return error
    })

    return resultRes;
}

const getRequestById = async(ID) => {
    const result = QueryDatabase(`SELECT * FROM REQUESTS WHERE  RID =${ID}`)
    let resultRes = result.then(res => {
        return res
    }).catch(error => {
        return error
    })

    return resultRes;
}

const getRequestByCreator = async(CID) => {
    const result = QueryDatabase(`SELECT * FROM REQUESTS WHERE  Creator =${CID}`)
    let resultRes = result.then(res => {
        return res
    }).catch(error => {
        return error
    })

    return resultRes;
}


module.exports= {
    getAllRequests,
    getRequestById,
    getRequestByCreator
}