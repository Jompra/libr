const Book = require('../models/Book')
const Author = require('../models/Author')

exports.book_create_get = async (req, res) => {
    try {
        const authors = await Author.find()
        res.render('book/add', {authors})
    } catch (error) {
        console.log(error.message)
    }

    
}

exports.book_create_post = (req, res) => {
    console.log(req.body)


    const book = new Book(req.body)
    book.save()
        .then(() => {
            console.log('Your book has been saved')
            return res.redirect('/book/index')
        })
        .catch((err) => {
            console.log('an error occurred', err)
        })
}

exports.book_index_get = async (req, res) => {
    try{
        const books = await Book.find().populate('author')
        console.log(books)
        res.render('book/index', { books })
        // res.render('book/index', { books: books }) //does the same thing
    } catch (error) {
        console.log(error.message)
        res.send('HMMMMM Something is not right')
    }

    // Book.find().then((books) =>{
    //     console.log(books)
    //     res.render('book/index', {books})
    // }).catch((error) => {
    //     console.log(error.message)
    //     res.send('HMMMMM Something is not right')
    // })

}

exports.book_delete = async (req, res) => {
    console.log(req.query.id)
    try {
        // Try to execute this code
        await Book.findByIdAndDelete(req.query.id)
        return res.redirect('/book/index')
    } catch (error) {
        // Execute this if there is an error
        console.log(error.message)
        res.send(error.message)
    } finally {
        // Execute this code no matter what
        console.log('We are in the finally block')
    }
}

exports.book_detail_get = async (req, res) => {
    try {
        const book = await Book.findById(req.query.id)
        res.render('book/detail', {book} )
    } catch (error) {
        console.log(error.message)
        res.send(error.message)
    }
}

exports.book_edit_get = async (req, res) => {
    try {
        const book = await Book.findById(req.query.id)
        res.render('book/edit', {book})
    } catch (error) {
        console.log(error.message)
        res.send(error.message)
    }
}

exports.book_edit_post = async (req, res) => {
    try {
        console.log(req.body.id)
        await Book.findByIdAndUpdate(req.body.id, req.body)
        res.redirect('/book/index')
    } catch (error) {
        console.log(error.message)
    }
}