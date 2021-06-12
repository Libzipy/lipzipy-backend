'user strict'

const { threadId } = require('../../config/db.config')
var dbConn = require('../../config/db.config')

//User_Book Object Model
var Type_Book = function (type_Book) {
  this.type_id = type_Book.type_id
  this.ISBN_id = type_Book.ISBN_id
}

//User_Book Creation *FOR ADD A BOOK TO A USER*
Type_Book.addtype = function (newType_Book, result) {
  dbConn.query('INSERT INTO book_type set ?', newType_Book, function (err, res) {
    if (err) {
      console.log('error: ', err)
      result(err, null)
    } else {
      console.log(res.insertId)
      result(null, res.insertId)
    }
  })
}

//USER_BOOK DELETATİON *FOR DELETE A BOOK OF A USER*
Type_Book.delete = function (id, result) {
  dbConn.query('DELETE FROM book_type WHERE ISBN_id = ?', [id], function (err, res) {
    if (err) {
      console.log('error: ', err)
      result(null, err)
    } else {
      result(null, res)
    }
  })
}

//USER_BOOK SELECT ALL BOOKS OF A USER
Type_Book.findAll = function (id, result) {
  dbConn.query("select book.ISBN_id, book.book_name from book inner join book_type on book_type.ISBN_id=book.ISBN_id where book_type.type_id= ?",[id], function (err, res) {
    if (err) {
      console.log('error: ', err)
      result(null, err)
    } else {
      console.log('ALL : ', res)
      result(null, res)
    }
  })
}

module.exports = Type_Book