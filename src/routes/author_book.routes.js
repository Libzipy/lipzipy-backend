const express = require('express')
const router = express.Router()
const author_bookController = require('../controllers/author_book.controller')

// ADD BOOK TO A LİBRARY
router.post('/', author_bookController.addbook)

// DELETE A BOOK FROM A LİBRARY
router.delete('/:id', author_bookController.delete)

// SELECT ALL BOOKS OF A LİBRARY
router.get('/:id', author_bookController.findAll)

module.exports = router
