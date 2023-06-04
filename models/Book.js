const mongoose = require('mongoose')

const bookSchema = mongoose.Schema({
    title: String,
    author: String,
    genre: String,
    isFiction: Boolean,
    numberOfPages: Number
})

const Book = mongoose.model('Book', bookSchema)

module.exports = Book