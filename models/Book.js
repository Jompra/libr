const mongoose = require('mongoose')

const bookSchema = mongoose.Schema({
    title: String,
    genre: String,
    isFiction: Boolean,
    numberOfPages: Number,
    author: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Author'
    }]
})

const Book = mongoose.model('Book', bookSchema)

module.exports = Book