'user strict'

const mysql = require('mysql')
const dotenv = require('dotenv')

dotenv.config()

//local mysql db connection
const dbConn = mysql.createConnection({
  host: process.env.HOST,
  user: 'root',
  password: 'furkan78',
  database: 'mydb'
})
dbConn.connect(function (err) {
  if (err) throw err
  console.log('Database Connected!')
})
module.exports = dbConn
