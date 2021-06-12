const express = require('express')
const router = express.Router()
const user_bookController = require('../controllers/user_book.controller')

// ADD A BOOK TO A USER
router.post('/', user_bookController.addbook)

module.exports = router
