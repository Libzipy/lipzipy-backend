const express = require('express')
const router = express.Router()
const LibraryController = require('../controllers/library.controller')

router.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

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
