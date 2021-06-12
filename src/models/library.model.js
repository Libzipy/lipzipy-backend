'user strict'

const { threadId } = require('../../config/db.config')
var dbConn = require('../../config/db.config')

//Library object create
var Library = function (lib) {
  this.library_name = lib.library_name
  this.library_adress = lib.library_adress
}

//Create query *Only For Admins
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

//FindbyName query *For Listing Libraries By Names 
Library.findById = function (name, result) {
  dbConn.query('Select * from library where library_name = ? ', name, function (err, res) {
    if (err) {
      console.log('error: ', err)
      result(err, null)
    } else {
      result(null, res)
    }
  })
}

//Findall query
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

//Update query
Library.update = function (id, library, result) {
  dbConn.query(
    'UPDATE library SET library_name=?,library_adress=? WHERE library_id = ?',
    [
      library.library_name,
      library.library_adress,
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

//Delete query
Library.delete = function (id, result) {
  dbConn.query('DELETE FROM book_library WHERE library_id = ?',[id], function (err, res) {
    if (err) {
      console.log('error: ', err)
      result(null, err)
    } else {
      console.log('Users : ', res)
      result(null, res)
    }
  })
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
