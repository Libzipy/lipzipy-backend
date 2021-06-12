'user strict'

const { threadId } = require('../../config/db.config')
var dbConn = require('../../config/db.config')

//Author_Book Object Model
var Author_Book = function (Author_Book) {
  this.author_id = Author_Book.author_id
  this.ISBN_id = Author_Book.ISBN_id
}

//Author_Book Creation *FOR ADD A BOOK TO A USER*
Author_Book.addbook = function (newAuthor_Book, result) {
  dbConn.query('INSERT INTO  set ?', newAuthor_Book, function (err, res) {
    if (err) {
      console.log('error: ', err)
      result(err, null)
    } else {
      console.log(res.insertId)
      result(null, res.insertId)
    }
  })
}

//Author_Book DELETATİON *FOR DELETE A BOOK OF A Library*
Author_Book.delete = function (id, result) {
  dbConn.query('DELETE FROM author_book WHERE ISBN_id = ?', [id], function (err, res) {
    if (err) {
      console.log('error: ', err)
      result(null, err)
    } else {
      result(null, res)
    }
  })
}

//Author_Book SELECT ALL BOOKS OF A USER
Author_Book.findAll = function (id, result) {
  dbConn.query("select book.ISBN_id, book.book_name from book inner join author_book on author_book.ISBN_id=book.ISBN_id where author_book.author_id= ?",[id], function (err, res) {
    if (err) {
      console.log('error: ', err)
      result(null, err)
    } else {
      console.log('ALL : ', res)
      result(null, res)
    }
  })
}

module.exports = Author_Book