var mysql = require('mysql')
var { DATABASE, DATABASE_HOST, DATABASE_PASSWORD, DATABASE_USERNAME } = require('../config/index')

// create the database connection
const connection = mysql.createConnection({
    host: DATABASE_HOST,                      // DATABASE HOST : localhost for local environments
    user: DATABASE_USERNAME,                  // My sql username
    password: DATABASE_PASSWORD,              // my sql users' account password
    database: DATABASE                        // database  name
})

// initialized the connection
const startConnection = () => {
    connection.connect((error) => {
        if (error) {
            console.log(error)
        } else {
            console.log('connected to mysql')
        }
    })
}

// Query database by passing a SQL query
const QueryDatabase = (query) => {
    let promise = new Promise((resolve, reject) => {
        connection.query(query, (error, rows, fields) => {
            if (error)
                reject(error)
            resolve(rows)
        })
    })
    return promise;
}


module.exports = {
    QueryDatabase
}