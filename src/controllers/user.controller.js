'use strict'

const USER = require('../models/user.model')

exports.findAll = function (req, res) {
  USER.findAll(function (err, user) {
    console.log('controller')
    if (err) res.send(err)
    console.log('res', user)
    res.send(user)
  })
}

exports.create = function (req, res) {
  const newuser = new USER(req.body)
  console.log('req.body =>', req.body)

  USER.create(newuser, function (err, user) {
    if (err) {
      if (err.code === 'ER_DUP_ENTRY') {
        res.json({ error: true, message: 'Email is already in use!', data: user })
      }
    }
    if (err != true) {
      res.json({ error: false, message: 'User added successfully!', data: user })
    }
  })
}

exports.findById = function (req, res) {
  USER.findById(req.params.id, function (err, user) {
    if (err) res.send(err)
    res.json(user)
  })
}

exports.update = function (req, res) {
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.status(400).send({ error: true, message: 'Please provide all required field' })
  } else {
    USER.update(req.params.id, new USER(req.body), function (err, user) {
      if (err) res.send(err)
      res.json({ error: false, message: 'User successfully updated' })
    })
  }
}

exports.delete = function (req, res) {
  USER.delete(req.params.id, function (err, user) {
    if (err) res.send(err)
    res.json({ error: false, message: 'User successfully deleted' })
  })
}
