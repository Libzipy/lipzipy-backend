'use strict'

const Type_Book = require('../models/type_book.model')

// ADD A Type TO A Book
exports.addtype = function (req, res) {

  const newuserbook = new Type_Book(req.body)

  Type_Book.addtype(newuserbook, function (err, Type_Book) {
    if (err) {
      res.send(err)
    }
    res.json({ error: false, message: 'Type added to Book successfully!', data: Type_Book })
  })
}

// DELETE A Type FROM A Book
exports.delete = function (req, res) {
    Type_Book.delete(req.params.id, function (err, Type_Book) {
    if (err) {
      res.send(err)
    }
    res.json({ error: false, message: 'Books Type is successfully deleted' })
  })
}

// FİND ALL Type OF A Books
exports.findAll = function (req, res) {
    Type_Book.findAll(req.params.id, function (err, Type_Book) {
    if (err) {
      res.send(err)
    } 
    res.json(Type_Book)
  })
}