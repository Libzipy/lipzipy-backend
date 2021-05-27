'user strict'

const mysql = require('mysql')

//local mysql db connection
const dbConn = mysql.createPool('mysql://bde761772ee67e:7851fb7e@eu-cdbr-west-01.cleardb.com/heroku_cee269e8c907bb2?reconnect=true')
dbConn.connect(function (err) {
  console.log('Database Connected!')
})

module.exports = dbConn
