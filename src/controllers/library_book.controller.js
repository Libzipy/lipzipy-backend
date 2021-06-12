'use strict'

const Library_Book = require('../models/library_book.model')

// ADD A Book TO A Library
exports.addtype = function (req, res) {

  const newuserbook = new Library_Book(req.body)

  Library_Book.addbook(newuserbook, function (err, Library_Book) {
    if (err) {
      res.send(err)
    }
    res.json({ error: false, message: 'Book added to Library successfully!', data: Library_Book })
  })
}

// DELETE A Book FROM A Library
exports.delete = function (req, res) {
    Library_Book.delete(req.params.id, function (err, Library_Book) {
    if (err) {
      res.send(err)
    }
    res.json({ error: false, message: 'Libraries book is successfully deleted' })
  })
}

// FİND ALL Books OF A Library
exports.findAll = function (req, res) {
    Library_Book.findAll(req.params.id, function (err, Library_Book) {
    if (err) {
      res.send(err)
    } 
    res.json(Library_Book)
  })
}