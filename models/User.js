const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minlength: [2, 'Name must be 2 or more characters'],
        maxlength: [60, 'Name cannot be more than 60 characters']
    },
    lastName: {
        type: String,
        required: true,
        minlength: [2, 'Name must be 2 or more characters'],
        maxlength: [60, 'Name cannot be more than 60 characters']
    },
    emailAddress: {
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
},{
    timestamps: true
})

const User = mongoose.model('User', userSchema)

module.exports = User