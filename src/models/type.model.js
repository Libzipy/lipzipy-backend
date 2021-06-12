'user strict'

const { threadId } = require('../../config/db.config')
var dbConn = require('../../config/db.config')

//Type object create
var Type = function (type) {
  this.type_name = type.type_name
}

// Create a Type to a database *Only For Admins
Type.create = function (newtype, result) {
  dbConn.query('INSERT INTO type_list set ?', newtype, function (err, res) {
    if (err) {
      console.log('error: ', err)
      result(err, null)
    } else {
      console.log(res.insertId)
      result(null, res.insertId)
    }
  })
}

// Finding by id The Type that the database contains
Type.findById = function (id, result) {
  dbConn.query('Select * from type_list where type_id = ? ', id, function (err, res) {
    if (err) {
      console.log('error: ', err)
      result(err, null)
    } else {
      result(null, res)
    }
  })
}

// Finding by id The type_list that the database contains 
Type.findAll = function (result) {
  dbConn.query('Select * from type_list ORDER BY type_id ASC', function (err, res) {
    if (err) {
      console.log('error: ', err)
      result(null, err)
    } else {
      console.log('types : ', res)
      result(null, res)
    }
  })
}

// Updating the type_list in the database *Only for Admins
Type.update = function (id, type, result) {
  dbConn.query(
    'UPDATE type_list SET type_name=? WHERE type_id = ?',
    [
        type.type_name,
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

// Deleting the book in the database *Only for Admins
Type.delete = function (id, result) {
  dbConn.query('DELETE FROM book_type WHERE type_id = ?',[id], function (err, res) {
    if (err) {
      console.log('error: ', err)
      result(null, err)
    } else {
      console.log('Users : ', res)
      result(null, res)
    }
  })
  dbConn.query('DELETE FROM type_list WHERE type_id = ?', [id], function (err, res) {
    if (err) {
      console.log('error: ', err)
      result(null, err)
    } else {
      result(null, res)
    }
  })
}

module.exports = Type
