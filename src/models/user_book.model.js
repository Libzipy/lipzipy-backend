'user strict'

const { threadId } = require('../../config/db.config')
var dbConn = require('../../config/db.config')

//User_Book Object Model
var User_Book = function (user_book) {
  this.user_id = user_book.user_id
  this.ISBN_id = user_book.ISBN_id
  this.time_of_taken = user_book.time_of_taken
  this.time_of_given = user_book.time_of_given
}


//User_Book Creation *FOR ADD A BOOK TO A USER*
User_Book.addbook = function (newUser_Book, result) {
  dbConn.query('INSERT INTO user_on_loan set ?', newUser_Book, function (err, res) {
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
User_Book.delete = function (user_book, result) {
  dbConn.query('DELETE FROM user_on_loan WHERE ISBN_id = ? AND user_id = ?', [user_book.ISBN_id,user_book.user_id], function (err, res) {
    if (err) {
      console.log('error: ', err)
      result(null, err)
    } else {
      result(null, res)
    }
  })
}

//USER_BOOK SELECT ALL BOOKS OF A USER
User_Book.findAll = function (id, result) {
  dbConn.query("select book.ISBN_id,book.book_name,book.book_number_of_pages,book.book_date_of_issue,book.book_place_of_publication from book inner join user_on_loan on user_on_loan.ISBN_id=book.ISBN_id where user_on_loan.user_id= ?",[id], function (err, res) {
    if (err) {
      console.log('error: ', err)
      result(null, err)
    } else {
      console.log('All : ', res)
      result(null, res)
    }
  })
}

module.exports = User_Book