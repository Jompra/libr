const express = require('express')

const router = express.Router()

const authorController = require('../controllers/authors')
const isLoggedIn = require('../lib/isLoggedIn')

router.get('/author/add', isLoggedIn, authorController.author_create_get)
router.post('/author/add', authorController.author_create_post)
router.get('/author/index', authorController.author_index_get)

module.exports = router
