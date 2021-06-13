'user strict'

const { threadId } = require('../../config/db.config')
var dbConn = require('../../config/db.config')

//Library object create
var Book = function (book) {
  this.book_name = book.book_name
  this.book_number_of_pages = book.book_number_of_pages
  this.book_date_of_issue = book.book_date_of_issue
  this.book_place_of_publication = book.book_place_of_publication
}

// Create a book to a database *Only For Admins
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

// Finding by id The books that the database contains
Book.findById = function (id, result) {
  dbConn.query('Select * from book where ISBN_id = ? ', id, function (err, res) {
    if (err) {
      console.log('error: ', err)
      result(err, null)
    } else {
      result(null, res)
    }
  })
}

// Finding by id The books that the database contains 
Book.findAll = function (result) {
  dbConn.query('Select * from book ORDER BY ISBN_id ASC', function (err, res) {
    if (err) {
      console.log('error: ', err)
      result(null, err)
    } else {
      console.log('Books : ', res)
      result(null, res)
    }
  })
}

// Updating the book in the database *Only for Admins
Book.update = function (id, book, result) {
  dbConn.query(
    'UPDATE book SET book_name=?,book_number_of_pages=?,book_date_of_issue=?,book_place_of_publication WHERE ISBN_id = ?',
    [
      book.book_name,
      book.book_number_of_pages,
      book.book_book_date_of_issue,
      book.book_book_place_of_publication,
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
Book.delete = function (id, result) {
  dbConn.query('DELETE FROM book_type WHERE ISBN_id = ?',[id])
  dbConn.query('DELETE FROM book_library WHERE ISBN_id = ?',[id])
  dbConn.query('DELETE FROM author_book WHERE ISBN_id = ?',[id])
  dbConn.query('DELETE FROM user_on_loan WHERE ISBN_id = ?',[id])
  dbConn.query('DELETE FROM book WHERE ISBN_id = ?', [id], function (err, res) {
    if (err) {
      console.log('error: ', err)
      result(null, err)
    } else {
      result(null, res)
    }
  })
}

module.exports = Book
