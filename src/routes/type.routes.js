const express = require('express')
const router = express.Router()
const typecontroller = require('../controllers/type.controller')

// Retrieve all type
router.get('/', typecontroller.findAll)

// Create a new type
router.post('/', typecontroller.create)

// Retrieve a single type with id
router.get('/:id', typecontroller.findById)

// Update a type with id
router.put('/:id', typecontroller.update)

// Delete a type with id
router.delete('/:id', typecontroller.delete)

module.exports = router
