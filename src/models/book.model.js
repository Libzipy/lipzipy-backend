'user strict'

const { threadId } = require('../../config/db.config')
var dbConn = require('../../config/db.config')

//Library object create
var Book = function (book) {
  this.book_name = book.book_name
  this.book_number_of_pages = book.book_number_of_pages
  this.book_date_of_issue = book.book_date_of_issue
  this.book_place_of_publication = book.book_place_of_publication
  this.type_id = book.type_id
  this.author_id = book.author_id
}

var a = 0

// Create a book to a database *Only For Admins
Book.create = function (newbook, result) {
    dbConn.query('INSERT INTO book SET book_name=?,book_number_of_pages=?,book_date_of_issue=?,book_place_of_publication = ?',
    [
      newbook.book_name,
      newbook.book_number_of_pages,
      newbook.book_date_of_issue,
      newbook.book_place_of_publication
    ], function (err, res) {
      if (err) {
        console.log('error: ', err)
        result(err, null)
      } else {
        console.log(res.insertId)
        a = res[1]
        result(null, res.insertId)
      }
    })

    console.log(a);

  dbConn.query('INSERT INTO book_type set type_id=?, ISBN_id = (SELECT max(ISBN_id) FROM book)', newbook.type_id)
  dbConn.query('INSERT INTO author_book SET author_id=?, ISBN_id = (SELECT max(ISBN_id) FROM book)', newbook.author_id)
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
    'UPDATE author_book SET author_id=? WHERE ISBN_id = ?',
    [
      book.author_id,
      id
    ])
  dbConn.query(
    'UPDATE book SET book_name=?,book_number_of_pages=?,book_date_of_issue=?,book_place_of_publication = ? WHERE ISBN_id = ?',
    [
      book.book_name,
      book.book_number_of_pages,
      book.book_date_of_issue,
      book.book_place_of_publication,
      id
    ])
  dbConn.query(
    'UPDATE book_type SET type_id=? WHERE ISBN_id = ?',
    [
      book.type_id,
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
