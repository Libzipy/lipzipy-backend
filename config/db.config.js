'user strict'

const mysql = require('mysql')

//local mysql db connection
const dbConn = mysql.createPool({
  connectionLimit: LIMIT,
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DB,
  debug: false
})

module.exports = dbConn
