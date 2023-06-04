const Book = require('../models/Book')

exports.book_create_get = (req, res) => {
    res.render('book/add')
}

exports.book_create_post = (req, res) => {
    console.log(req.body)
    const book = new Book(req.body)

    book.save()
        .then(() => {
            console.log('Your book has been saved')
        })
        .catch((err) => {
            console.log('an error occurred', err)
        })
}

exports.book_index_get = async (req, res) => {
    const books = await Book.find()
    console.log(books)
    res.render('book/index', { books })
    // res.render('book/index', { books: books }) //does the same thing
}