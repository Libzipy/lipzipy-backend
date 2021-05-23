'user strict'

const { threadId } = require('../../config/db.config')
var dbConn = require('../../config/db.config')

//Library object create
var Library = function (lib) {
  this.library_name = lib.library_name
  this.library_adress = lib.library_adress
  this.library_wh = lib.library_wh
}

Library.create = function (newlibrary, result) {
  dbConn.query('INSERT INTO library set ?', newlibrary, function (err, res) {
    if (err) {
      console.log('error: ', err)
      result(err, null)
    } else {
      console.log(res.insertId)
      result(null, res.insertId)
    }
  })
}
Library.findById = function (id, result) {
  dbConn.query('Select * from library where library_id = ? ', id, function (err, res) {
    if (err) {
      console.log('error: ', err)
      result(err, null)
    } else {
      result(null, res)
    }
  })
}
Library.findAll = function (result) {
  dbConn.query('Select * from library ORDER BY library_id ASC', function (err, res) {
    if (err) {
      console.log('error: ', err)
      result(null, err)
    } else {
      console.log('Libraries : ', res)
      result(null, res)
    }
  })
}
Library.update = function (id, user, result) {
  dbConn.query(
    'UPDATE library SET library_name=?,library_adress=?,library_wh=? WHERE library_id = ?',
    [
      lib.library_name,
      lib.library_adress,
      lib.library_wh,
      id
    ],
    function (err, res) {
      if (err) {
        console.log('error: ', err)
        result(null, err)
      } else {
        result(null, res)
      }
    }
  )
}
Library.delete = function (id, result) {
  dbConn.query('DELETE FROM library WHERE library_id = ?', [id], function (err, res) {
    if (err) {
      console.log('error: ', err)
      result(null, err)
    } else {
      result(null, res)
    }
  })
}

module.exports = Library
