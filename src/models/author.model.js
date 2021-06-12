'user strict'

const { threadId } = require('../../config/db.config')
var dbConn = require('../../config/db.config')

//Author object create
var Author = function (Author) {
    this.author_name = Author.author_name
    this.author_surname = Author.author_surname
    this.author_nationality = Author.author_nationality
    this.author_date_of_birth = Author.author_date_of_birth
}

//Create query
Author.create = function (author, result) {
    dbConn.query('INSERT INTO author set ?', author, function (err, res) {
        if (err) {
            console.log('error: ', err)
            result(err, null)
        } else {
            console.log(res.insertId)
            result(null, res.insertId)
        }
    })
}

//FindbyName query *For Listing Author By ID 
Author.findById = function (name, result) {
    dbConn.query('Select * from author where author_id = ? ', name, function (err, res) {
        if (err) {
            console.log('error: ', err)
            result(err, null)
        } else {
            result(null, res)
        }
    })
}

//Findall query
Author.findAll = function (result) {
    dbConn.query('Select * from author ORDER BY author_id ASC', function (err, res) {
        if (err) {
            console.log('error: ', err)
            result(null, err)
        } else {
            console.log('Libraries : ', res)
            result(null, res)
        }
    })
}

//Update query
Author.update = function (id, Author, result) {
    dbConn.query(
        'UPDATE author SET author_name=?,author_surname=?,author_nationality=?,author_date_of_birth WHERE author_id = ?',
        [
            Author.author_name,
            Author.author_surname,
            Author.author_nationality,
            Author.author_date_of_birth,
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

//Delete query
Author.delete = function (id, result) {
    dbConn.query('DELETE FROM author_book WHERE author_id = ?',[id])
    dbConn.query('DELETE FROM author WHERE author_id = ?', [id], function (err, res) {
        if (err) {
            console.log('error: ', err)
            result(null, err)
        } else {
            result(null, res)
        }
    })
}

module.exports = Author
