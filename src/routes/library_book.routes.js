const express = require('express')
const router = express.Router()
const library_bookController = require('../controllers/library_book.controller')

// ADD BOOK TO A LİBRARY
router.post('/', library_bookController.addbook)

// DELETE A BOOK FROM A LİBRARY
router.delete('/', library_bookController.delete)

// SELECT ALL BOOKS OF A LİBRARY
router.get('/:id', library_bookController.findAll)

module.exports = router

