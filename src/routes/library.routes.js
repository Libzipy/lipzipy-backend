const express = require('express')
const router = express.Router()
const LibraryController = require('../controllers/library.controller')

// Retrieve all Libraries
router.get('/', LibraryController.findAll)

// Create a new Library //Only Admins
router.post('/', LibraryController.create)

// Retrieve a single Library with Library_id
router.get('/:name', LibraryController.findById)

// Update a Library with Library_id
router.put('/:id', LibraryController.update)

// Delete a Library with Library_id
router.delete('/:id', LibraryController.delete)

module.exports = router
