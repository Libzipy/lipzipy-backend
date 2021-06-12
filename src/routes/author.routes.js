const express = require('express')
const router = express.Router()
const AuthorController = require('../controllers/author.controller')

// Retrieve all Author From A Library
router.get('/', AuthorController.findAll)

// Create a new Author İn A Library
router.post('/', AuthorController.create)

// Retrieve a single Author with Name İn A Library
router.get('/:id', AuthorController.findById)

// Update a Author with Name İn A Library
router.put('/:id', AuthorController.update)

// Delete a Author with Name İn A Library
router.delete('/:id', AuthorController.delete)

module.exports = router
