'use strict'

const Author = require('../models/author.model')

// FindAll
exports.findAll = function (req, res) {
    Author.findAll(function (err, Author) {
    if (err){
      res.send(err)
    }
    res.send(Author)
  })
}

// Create
exports.create = function (req, res) {

  const author = new Author(req.body)

  Author.create(author, function (err, Author) {
    if (err) {
      if (err.code === 'ER_DUP_ENTRY') {
        res.json({ error: true, message: 'Author name is already in use', data: Author })
      }
      else{
        res.json({ error: true, message: 'Some Error', data: Author })
    }
    }
    if (err != true) {
      res.json({ error: false, message: 'Author is added successfully!', data: Author })
    }
  })
}

// FindID
exports.findById = function (req, res) {
    Author.findById(req.params.id, function (err, Author) {
    if (err) {
      res.send(err)
    } 
    res.json(Author)
  })
}

// Update
exports.update = function (req, res) {
  if (err) {
    if (err.code === 'ER_DUP_ENTRY') {
      res.json({ error: true, message: 'Author name is already in use', data: Author })
    }
    else{
      res.json({ error: true, message: 'Some Error', data: Author })
  }
  }
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.status(400).send({ error: true, message: 'Please provide all required field' })
  } 
  else {
    Author.update(req.params.id, new Author(req.body), function (err, Author) {
      if (err) {
        res.send(err)
      } 
      res.json({ error: false, message: 'Author is successfully updated' })
    })
  }
}

// Delete
exports.delete = function (req, res) {
    Author.delete(req.params.id, function (err, Author) {
    if (err){
      res.send(err)
    } 
    res.json({ error: false, message: 'Author is successfully deleted' })
  })
}
