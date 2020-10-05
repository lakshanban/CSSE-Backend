const { QueryDatabase } = require('../services/databaseService')

const loginService = async(username , password) => {
    
    const promise = QueryDatabase(`SELECT * FROM USERS WHERE USERNAME='${username}' and PASSWORD='${password}'`)
   let result= promise.then(res => {
        return res
      })

    return result;
}

module.exports = {
    loginService
}