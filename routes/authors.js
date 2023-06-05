const express = require('express')

const router = express.Router()

const authorController = require('../controllers/authors')

router.get('/author/add', authorController.author_create_get)
router.post('/author/add', authorController.author_create_post)
router.get('/author/index', authorController.author_index_get)

module.exports = router
