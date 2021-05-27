'use strict'

const Library = require('../models/library.model')

exports.findAll = function (req, res) {
    Library.findAll(function (err, lib) {
        console.log('controller')
        if (err) res.send(err)
        console.log('res', lib)
        res.send(lib)
    })
}

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
            res.json({ error: false, message: 'Library added successfully!', data: lib })
        }
    })
}

exports.findById = function (req, res) {
    Library.findById(req.params.id, function (err, lib) {
        if (err) res.send(err)
        res.json(lib)
    })
}

exports.update = function (req, res) {
    if (err) {
        if (err.code === 'ER_DUP_ENTRY') {
            res.json({ error: true, message: 'Library Name already is in use', data: lib })
        }
        else{
            res.json({ error: true, message: 'Some Error', data: lib })
        }
    }
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required field' })
    } else {
        Library.update(req.params.id, new USER(req.body), function (err, lib) {
            if (err) res.send(err)
            res.json({ error: false, message: 'Library successfully updated' })
        })
    }
}

exports.delete = function (req, res) {
    Library.delete(req.params.id, function (err, lib) {
        if (err) res.send(err)
        res.json({ error: false, message: 'Library successfully deleted' })
    })
}