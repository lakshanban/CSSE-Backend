var mysql = require('mysql')
var { DATABASE, DATABASE_HOST, DATABASE_PASSWORD, DATABASE_USERNAME } = require('../config/index')

const connection = mysql.createConnection({
    host: DATABASE_HOST,
    user: DATABASE_USERNAME,
    password: DATABASE_PASSWORD,
    database: DATABASE
})

const startConnection = () => {
    connection.connect((error) => {
        if(error){
            console.log(error)
        }else{
            console.log('connected to mysql')
        }
    })
}

const QueryDatabase = (query) => {
    let promise = new Promise((resolve, reject)=> {
       connection.query(query, (error , rows, fields) => {
           if(error)
            reject(error)
           resolve(rows)
       })
    })
    return promise;
}


module.exports={
    QueryDatabase
}