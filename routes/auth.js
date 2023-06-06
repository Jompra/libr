const express = require('express')
const router = express.Router()

const authController = require('../controllers/auth')

router.get('/auth/signup', authController.auth_signup_get)
router.get('/auth/signin', authController.auth_signin_get)

module.exports = router
