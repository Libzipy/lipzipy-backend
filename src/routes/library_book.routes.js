const express = require('express')
const router = express.Router()
const library_bookController = require('../controllers/library_book.controller')

// ADD A BOOK TO A LİBRARY
router.post('/', library_bookController.addlibrary)

module.exports = router
