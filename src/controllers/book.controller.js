'use strict'

const Book = require('../models/book.model')

// FindAll Books that the database contains
exports.findAll = function (req, res) {
    Book.findAll(function (err, book) {
        if (err){
            res.send(err)
        } 
        res.send(book)
    })
}

// Create A Book to the database *Only admins
exports.create = function (req, res) {
    
    const newbook = new Book(req.body)

    Book.create(newbook, function (err, book) {
        if (err) {
            if (err.code === 'ER_DUP_ENTRY') {
                res.json({ error: true, message: 'Book Name already is in use', data: book })
            }
            else{
                res.json({ error: true, message: 'Some Error', data: book })
            }
        }
        if (err != true) {
            res.json({ error: false, message: 'Book added successfully!', data: book })
        }
    })
}

// FindByID Books that the database contains
exports.findById = function (req, res) {
    Book.findById(req.params.id, function (err, book) {
        if (err){
            res.send(err)
        } 
        res.json(book)
    })
}

// Update a book that is in the database *Only admins
exports.update = function (req, res) {
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required field' })
    } else {
        Book.update(req.params.id, new Book(req.body), function (err, book) {
            if (err){
                res.send(err)
            } 
            res.json({ error: false, message: 'Book successfully updated' })
        })
    }
}

// Delete a book from database *Only admins
exports.delete = function (req, res) {
    Book.delete(req.params.id, function (err, book) {
        if (err){
            res.send(err)
        } 
        res.json({ error: false, message: 'Book successfully deleted' })
    })
}
