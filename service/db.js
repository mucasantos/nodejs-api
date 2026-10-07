//Conectar com o DB

const mysql = require("mysql2")

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'escola',
    port: 3306
})

const db = pool.promise()

module.exports = db;