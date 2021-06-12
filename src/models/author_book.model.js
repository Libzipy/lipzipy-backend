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

module.exports = User_Book