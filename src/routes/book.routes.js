const express = require('express')
const router = express.Router()
const BookController = require('../controllers/book.controller')

router.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

// Retrieve all Books
router.get('/', BookController.findAll)

// Create a new Book
router.post('/', BookController.create)

// Retrieve a single Book with id
router.get('/:id', BookController.findById)

// Update a Book with id
router.put('/:id', BookController.update)

// Delete a Book with id
router.delete('/:id', BookController.delete)

module.exports = router
