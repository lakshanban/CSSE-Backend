const databaseService = require('./databaseService').QueryDatabase

// this service will return all the site details 
const getAllSites = async () => {
    const result = await databaseService('SELECT * FROM site')
    return result;
}

const getSiteByid = async (site_id) => {
    const result = await databaseService(`SELECT * FROM site WHERE site_id = ${site_id}`)
    return result;
}

module.exports = {
    getAllSites,
    getSiteByid
}