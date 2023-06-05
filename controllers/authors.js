const Author = require('../models/Author')

exports.author_create_get = (req, res) => {
    res.render('author/add')
}

exports.author_create_post = async (req, res) => {
    try{
        console.log(req.body)
        const author = new Author(req.body)

        await author.save()
    } catch (error){
        console.log(error.message)
    }
}