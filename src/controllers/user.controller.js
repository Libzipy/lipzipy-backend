'use strict'

const USER = require('../models/user.model')

// FindAll
exports.findAll = function (req, res) {
  USER.findAll(function (err, user) {
    if (err){
      res.send(err)
    }
    res.send(user)
  })
}

// Create
exports.create = function (req, res) {

  const newuser = new USER(req.body)

  USER.create(newuser, function (err, user) {
    if (err) {
      if (err.code === 'ER_DUP_ENTRY') {
        res.json({ error: true, message: 'Email or Phone Number Already in use', data: user })
      }
      else{
        res.json({ error: true, message: 'Some Error', data: user })
    }
    }
    if (err != true) {
      res.json({ error: false, message: 'User is added successfully!', data: user })
    }
  })
}

// FindID
exports.findById = function (req, res) {
  USER.findById(req.params.id, function (err, user) {
    if (err) {
      res.send(err)
    } 
    res.json(user)
  })
}

// Update
exports.update = function (req, res) {
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.status(400).send({ error: true, message: 'Please provide all required field' })
  } 
  else {
    USER.update(req.params.id, new USER(req.body), function (err, user) {
      if (err) {
        if (err.code === 'ER_DUP_ENTRY') {
          res.json({ error: true, message: 'Email or Phone Number Already in use', data: user })
        }
        else{
          res.json({ error: true, message: 'Some Error', data: user })
      }
      }
      res.json({ error: false, message: 'User is successfully updated' })
    })
  }
}

// Delete
exports.delete = function (req, res) {
  USER.delete(req.params.id, function (err, user) {
    if (err){
      res.send(err)
    } 
    res.json({ error: false, message: 'User is successfully deleted' })
  })
}
