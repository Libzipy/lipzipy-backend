'use strict'

const Type = require('../models/type.model')

// FindAll
exports.findAll = function (req, res) {
    Type.findAll(function (err, Type) {
        if (err){
            res.send(err)
        } 
        res.send(Type)
    })
}

// Create
exports.create = function (req, res) {
    const newtype = new Type(req.body)

    Type.create(newtype, function (err, Type) {
        if (err) {
            if (err.code === 'ER_DUP_ENTRY') {
                res.json({ error: true, message: 'Type Name already is in use', data: Type })
            }
            else{
                res.json({ error: true, message: 'Some Error', data: Type })
            }
        }
        if (err != true) {
            res.json({ error: false, message: 'Type is added successfully!', data: Type })
        }
    })
}

// FindById
exports.findById = function (req, res) {
    Type.findById(req.params.id, function (err, Type) {
        if (err){
            res.send(err)
        }
        res.json(Type)
    })
}

// Update
exports.update = function (req, res) {
    if (err) {
        if (err.code === 'ER_DUP_ENTRY') {
            res.json({ error: true, message: 'Type Name already is in use', data: Type })
        }
        else{
            res.json({ error: true, message: 'Some Error', data: Type })
        }
    }
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required field' })
    } else {
        Type.update(req.params.id, new Type(req.body), function (err, Type) {
            if (err){
                res.send(err)
            }
            res.json({ error: false, message: 'Type is successfully updated' })
        })
    }
}

// Delete
exports.delete = function (req, res) {
    Type.delete(req.params.id, function (err, Type) {
        if (err){
            res.send(err)
        } 
        res.json({ error: false, message: 'Type is successfully deleted' })
    })
}
