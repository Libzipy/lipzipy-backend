'user strict'

const mysql = require('mysql')

//local mysql db connection
const dbConn = mysql.createConnection({
  host: "eu-cdbr-west-01.cleardb.com",
  user: "bde761772ee67e",
  password: "7851fb7e",
  database: "heroku_cee269e8c907bb2"
})
dbConn.connect(function (err) {
  console.log('Database Connected!')
})

module.exports = dbConn
