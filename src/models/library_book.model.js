'user strict'

const { threadId } = require('../../config/db.config')
var dbConn = require('../../config/db.config')

//Library_Book Object Model
var Library_Book = function (library_Book) {
  this.library_id = library_Book.library_id
  this.ISBN_id = library_Book.ISBN_id
}

//Library_Book Creation *FOR ADD A BOOK TO A USER*
Library_Book.addbook = function (newLibrary_Book, result) {
  dbConn.query('INSERT INTO book_library set ?', newLibrary_Book, function (err, res) {
    if (err) {
      console.log('error: ', err)
      result(err, null)
    } else {
      console.log(res.insertId)
      result(null, res.insertId)
    }
  })
}

//Library_Book DELETATİON *FOR DELETE A BOOK OF A Library*
Library_Book.delete = function (id, result) {
  dbConn.query('DELETE FROM book_library WHERE ISBN_id = ?', [id], function (err, res) {
    if (err) {
      console.log('error: ', err)
      result(null, err)
    } else {
      result(null, res)
    }
  })
}

//Library_Book SELECT ALL BOOKS OF A USER
Library_Book.findAll = function (id, result) {
  dbConn.query("select book.ISBN_id, book.book_name from book inner join book_library on book_library.ISBN_id=book.ISBN_id where book_library.library_id= ?",[id], function (err, res) {
    if (err) {
      console.log('error: ', err)
      result(null, err)
    } else {
      console.log('ALL : ', res)
      result(null, res)
    }
  })
}

module.exports = Library_Book