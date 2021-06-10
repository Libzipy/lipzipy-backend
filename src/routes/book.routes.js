const express = require('express')
const router = express.Router()
const BookController = require('../controllers/book.controller')

// Retrieve all Books From A Library
router.get('/', BookController.findAll)

// Create a new Book İn A Library
router.post('/', BookController.create)

// Retrieve a single Book with Name İn A Library
router.get('/:id', BookController.findById)

// Update a Book with Name İn A Library
router.put('/:id', BookController.update)

// Delete a Book with Name İn A Library
router.delete('/:id', BookController.delete)

module.exports = router
