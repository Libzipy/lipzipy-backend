'user strict'

const { threadId } = require('../../config/db.config')
var dbConn = require('../../config/db.config')

//User_Book Object Model
var User_Book = function (User_Book) {
  this.user_id = User_Book.user_id
  this.ISBN_id = User_Book.ISBN_id
  this.time_of_taken = User_Book.time_of_taken
  this.time_of_given = User_Book.time_of_given
}


//User_Book Creation *FOR ADD A BOOK TO A USER*
User_Book.addtouser = function (newUser_Book, result) {
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