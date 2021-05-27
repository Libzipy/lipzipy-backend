'user strict'

const mysql = require('mysql')

//local mysql db connection
const dbConn = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DB
})
dbConn.connect(function (err) {
  console.log('Database Connected!')
})

module.exports = dbConn
