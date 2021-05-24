'user strict'

const { threadId } = require('../../config/db.config')
var dbConn = require('../../config/db.config')

//Library object create
var Book = function (book) {
  this.isbn = book.isbn
  this.book_name = book.book_name
  this.book_np = book.book_np
  this.book_yp = book.book_yp
}

Book.create = function (newbook, result) {
  dbConn.query('INSERT INTO book set ?', newbook, function (err, res) {
    if (err) {
      console.log('error: ', err)
      result(err, null)
    } else {
      console.log(res.insertId)
      result(null, res.insertId)
    }
  })
}
Book.findById = function (id, result) {
  dbConn.query('Select * from book where isbn = ? ', id, function (err, res) {
    if (err) {
      console.log('error: ', err)
      result(err, null)
    } else {
      result(null, res)
    }
  })
}
Book.findAll = function (result) {
  dbConn.query('Select * from book ORDER BY isbn ASC', function (err, res) {
    if (err) {
      console.log('error: ', err)
      result(null, err)
    } else {
      console.log('Books : ', res)
      result(null, res)
    }
  })
}
Book.update = function (id, book, result) {
  dbConn.query(
    'UPDATE book SET book_name=?,book_np=?,book_yp=? WHERE isbn = ?',
    [
      lib.book_name,
      lib.book_np,
      lib.book_yp,
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
Book.delete = function (id, result) {
  dbConn.query('DELETE FROM book WHERE isbn = ?', [id], function (err, res) {
    if (err) {
      console.log('error: ', err)
      result(null, err)
    } else {
      result(null, res)
    }
  })
}

module.exports = Book
