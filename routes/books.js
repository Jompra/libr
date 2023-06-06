const express = require('express')
const router = express.Router()
const bookController = require('../controllers/books')
const isLoggedIn = require('../lib/isLoggedIn')

router.get('/book/add', isLoggedIn, bookController.book_create_get)
router.post('/book/add', bookController.book_create_post)
router.get('/book/index', bookController.book_index_get)
router.post('/book/delete', bookController.book_delete)
router.get('/book/detail', bookController.book_detail_get)
router.get('/book/edit', isLoggedIn, bookController.book_edit_get)
router.post('/book/edit', bookController.book_edit_post)

module.exports = router