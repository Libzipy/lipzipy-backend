'use strict'

const User_Book = require('../models/user_book.model')

// ADD A BOOK TO A User
exports.addbook = function (req, res) {
    
    const newuserbook = new User_Book(req.body)

    User_Book.addbook(newuserbook, function (err, User_Book) {
        if (err) {
            res.send(err)
        }
        res.json({ error: false, message: 'Book added to user successfully!', data: User_Book })
    })
}
