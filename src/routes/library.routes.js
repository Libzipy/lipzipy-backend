const express = require('express')
const router = express.Router()
const LibraryController = require('../controllers/library.controller')

// Retrieve all Libraries
router.get('/', LibraryController.findAll)

// Create a new Library
router.post('/', LibraryController.create)

// Retrieve a single Library with id
router.get('/:id', LibraryController.findById)

// Update a Library with id
router.put('/:id', LibraryController.update)

// Delete a Library with id
router.delete('/:id', LibraryController.delete)

module.exports = router
