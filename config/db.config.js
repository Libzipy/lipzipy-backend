'user strict'

const mysql = require('mysql')

//local mysql db connection
const dbConn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "m000000QWE",
  database: "mydb"
})
dbConn.connect(function (err) {
  if (err) throw err
  console.log('Database Connected!')
})
module.exports = dbConn
