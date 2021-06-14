const express = require('express')
const router = express.Router()
const user_bookController = require('../controllers/user_book.controller')

// ADD A BOOK TO A USER
router.post('/', user_bookController.addbook)

// DELETE A BOOK FROM A USER
router.delete('/', user_bookController.delete)

// SELECT ALL BOOKS OF A USER
router.get('/:id', user_bookController.findAll)

module.exports = router
