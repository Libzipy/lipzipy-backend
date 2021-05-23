const express = require('express')
const router = express.Router()
const usercontroller = require('../controllers/user.controller')

router.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

// Retrieve all Users
router.get('/', usercontroller.findAll)

// Create a new User
router.post('/', usercontroller.create)

// Retrieve a single User with id
router.get('/:id', usercontroller.findById)

// Update a User with id
router.put('/:id', usercontroller.update)

// Delete a User with id
router.delete('/:id', usercontroller.delete)

module.exports = router
