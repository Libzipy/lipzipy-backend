'use strict'

const Book = require('../models/book.model')

exports.findAll = function (req, res) {
    Book.findAll(function (err, book) {
        if (err){
            res.send(err)
        } 
        res.send(book)
    })
}

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

exports.findById = function (req, res) {
    Book.findById(req.params.id, function (err, book) {
        if (err){
            res.send(err)
        } 
        res.json(book)
    })
}

exports.update = function (req, res) {
    if (err) {
        if (err.code === 'ER_DUP_ENTRY') {
            res.json({ error: true, message: 'Book Name already is in use', data: book })
        }
        else{
            res.json({ error: true, message: 'Some Error', data: book })
        }
    }
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required field' })
    } else {
        Book.update(req.params.id, new USER(req.body), function (err, book) {
            if (err){
                res.send(err)
            } 
            res.json({ error: false, message: 'Book successfully updated' })
        })
    }
}

exports.delete = function (req, res) {
    Book.delete(req.params.id, function (err, book) {
        if (err){
            res.send(err)
        } 
        res.json({ error: false, message: 'Book successfully deleted' })
    })
}
