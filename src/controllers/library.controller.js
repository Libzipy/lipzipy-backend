'use strict'

const Library = require('../models/library.model')

// FindAll
exports.findAll = function (req, res) {
    Library.findAll(function (err, lib) {
        if (err){
            res.send(err)
        } 
        res.send(lib)
    })
}

// Create
exports.create = function (req, res) {
    const newlib = new Library(req.body)

    Library.create(newlib, function (err, lib) {
        if (err) {
            if (err.code === 'ER_DUP_ENTRY') {
                res.json({ error: true, message: 'Library Name already is in use', data: lib })
            }
            else{
                res.json({ error: true, message: 'Some Error', data: lib })
            }
        }
        if (err != true) {
            res.json({ error: false, message: 'Library is added successfully!', data: lib })
        }
    })
}

// FindById
exports.findById = function (req, res) {
    Library.findById(req.params.id, function (err, lib) {
        if (err){
            res.send(err)
        }
        res.json(lib)
    })
}

// Update
exports.update = function (req, res) {
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required field' })
    } else {
        Library.update(req.params.id, new Library(req.body), function (err, lib) {
            if (err){
                res.send(err)
            }
            res.json({ error: false, message: 'Library is successfully updated' })
        })
    }
}

// Delete
exports.delete = function (req, res) {
    Library.delete(req.params.id, function (err, lib) {
        if (err){
            res.send(err)
        } 
        res.json({ error: false, message: 'Library is successfully deleted' })
    })
}
