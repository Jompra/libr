const User = require('../models/User')

exports.auth_signup_get = (req, res) => {
    res.render('auth/signup')
}

exports.auth_signin_get = (req, res) => {
    res.render('auth/signin')
}

exports.auth_signup_post = async (req, res) => {
    try {
        console.log(req.body)
        const user = new User(req.body)
        await user.save()

        res.redirect('/')
    } catch (error) {
        console.log(error.message)
    }
}