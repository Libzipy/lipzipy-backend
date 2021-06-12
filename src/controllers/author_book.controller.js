'use strict'

const Author_Book = require('../models/author_book.model')

// ADD A Book TO A Library
exports.addtype = function (req, res) {

  const newuserbook = new Author_Book(req.body)

  Author_Book.addbook(newuserbook, function (err, Author_Book) {
    if (err) {
      res.send(err)
    }
    res.json({ error: false, message: 'Book added to Author successfully!', data: Author_Book })
  })
}

// DELETE A Book FROM A Library
exports.delete = function (req, res) {
    Author_Book.delete(req.params.id, function (err, Author_Book) {
    if (err) {
      res.send(err)
    }
    res.json({ error: false, message: 'Author book is successfully deleted' })
  })
}

// FİND ALL Books OF A Library
exports.findAll = function (req, res) {
    Author_Book.findAll(req.params.id, function (err, Author_Book) {
    if (err) {
      res.send(err)
    } 
    res.json(Author_Book)
  })
}