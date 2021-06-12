const express = require('express')
const router = express.Router()
const author_bookController = require('../controllers/author_book.controller')

// ADD A AUTHOR TO A BOOK
router.post('/', author_bookController.addauthor)

module.exports = router
