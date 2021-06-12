const express = require('express')
const router = express.Router()
const author_bookController = require('../controllers/author_book.controller')

// ADD A author_book TO A author_book
router.post('/', author_bookController.addbook)

// DELETE A author_book FROM A author_book
router.delete('/:id', author_bookController.delete)

// SELECT ALL author_book OF A author_book
router.get('/:id', author_bookController.findAll)

module.exports = router
