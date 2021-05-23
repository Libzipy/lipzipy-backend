'user strict'

const { threadId } = require('../../config/db.config')
var dbConn = require('../../config/db.config')

//Employee object create
var USER = function (user) {
  console.log('model user', user, user.user_name)
  this.user_name = user.user_name
  this.user_surname = user.user_surname
  this.user_phonenumber = user.user_phonenumber
  this.user_email = user.user_email
  this.user_password = user.user_password
}

USER.create = function (newuser, result) {
  dbConn.query('INSERT INTO user set ?', newuser, function (err, res) {
    if (err) {
      console.log('error: ', err)
      result(err, null)
    } else {
      console.log(res.insertId)
      result(null, res.insertId)
    }
  })
}
USER.findById = function (id, result) {
  dbConn.query('Select * from user where user_id = ? ', id, function (err, res) {
    if (err) {
      console.log('error: ', err)
      result(err, null)
    } else {
      result(null, res)
    }
  })
}
USER.findAll = function (result) {
  dbConn.query('Select * from user ORDER BY user_id ASC', function (err, res) {
    if (err) {
      console.log('error: ', err)
      result(null, err)
    } else {
      console.log('Users : ', res)
      result(null, res)
    }
  })
}
USER.update = function (id, user, result) {
  dbConn.query(
    'UPDATE user SET user_name=?,user_surname=?,user_phonenumber=?,user_email=?,user_password=? WHERE user_id = ?',
    [
      user.user_name,
      user.user_surname,
      user.user_phonenumber,
      user.user_email,
      user.user_password,
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
USER.delete = function (id, result) {
  dbConn.query('DELETE FROM user WHERE user_id = ?', [id], function (err, res) {
    if (err) {
      console.log('error: ', err)
      result(null, err)
    } else {
      result(null, res)
    }
  })
}

module.exports = USER
