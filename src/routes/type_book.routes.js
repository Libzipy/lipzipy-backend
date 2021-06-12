const express = require('express')
const router = express.Router()
const type_bookController = require('../controllers/type_book.controller')

// ADD TYPE TO A BOOK
router.post('/', type_bookController.addtype)

// DELETE A TYPE FROM A BOOK
router.delete('/:id', type_bookController.delete)

// SELECT ALL TYPE OF A BOOKS
router.get('/:id', type_bookController.findAll)

module.exports = router
