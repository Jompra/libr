const mongoose = require('mongoose')

const authorSchema = mongoose.Schema({
    name: {type: String, default: 'Joe Bloggs'},
    email: {type: String, required: true},
    book: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Book'
    }]
},{
    // Created at, updated at
    timestamps: true
})

const Author = mongoose.model('Author', authorSchema)

module.exports = Author
