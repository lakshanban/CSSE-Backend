const { getAllSites, getSiteByid } = require('../services/siteService')

// this controller will handle the get request to fetch all the site details path [site/getall]
const getAllSitesController = async (req, res) => {
    const result = await getAllSites();
    res.status(200).json(result);
}

// this controller will handle the requests to fetch site details by passing the site if path [site/getbyid]
const getSiteByidController = async (req, res) => {
    const site_id = req.body.site_id
    const result = await getSiteByid(site_id)

    res.status(200).json(result)
}

module.exports = {
    getSiteByidController,
    getAllSitesController
}