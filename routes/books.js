const express = require('express')
const router = express.Router()
const bookController = require('../controllers/books')

router.get('/book/add', bookController.book_create_get)
router.post('/book/add', bookController.book_create_post)
router.get('/book/index', bookController.book_index_get)
router.post('/book/delete', bookController.book_delete)

module.exports = router