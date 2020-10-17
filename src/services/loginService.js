const databseService = require('./databaseService').QueryDatabase

// user login except the supplier login
const loginService = async (email, passsword) => {
    const result = await databseService(`SELECT * FROM USER WHERE email='${email}' and password= '${passsword}'`)
    if (result.length === 1) {
        return {
            error: false,
            result: {
                email: result[0].email,
                user_id: result[0].user_id,
                type: result[0].type,
                phone_no: result[0].phone_no
            }
        }
    } else {
        return {
            error: true,
            errorMessage: "cant login to the System"
        }
    }
}

module.exports = {
    loginService
}