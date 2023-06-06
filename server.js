const express = require('express')
const mongoose = require('mongoose')
const expressLayouts = require('express-ejs-layouts')
const session = require('express-session')

const passport = require('./lib/passportConfig')

// Import our Routes
const indexRoute = require('./routes/index')
const bookRoute = require('./routes/books')
const authorRoute = require('./routes/authors')
const authRoute = require('./routes/auth')

//Initialise our app
const app = express()

const PORT = 4000


app.use(expressLayouts)
app.set('view engine', 'ejs')

app.use(express.static('public'))

app.use(express.urlencoded({
    extended: true
}))

app.use(session({
    secret: 'Thisisasecret!',
    saveUninitialized: true,
    resave: false,
    cookie: {maxAge: 86400000}
}))
app.use(passport.initialize())
app.use(passport.session())

// Mount our Routes
app.use('/', indexRoute)
app.use('/', bookRoute)
app.use('/', authorRoute)
app.use('/', authRoute)



app.listen(PORT, () => {
    console.log(`The Library is open on port ${PORT}`)
})

mongoose.connect('mongodb://127.0.0.1:27017/thelibrary',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
).then(() => {
    console.log('Mongoose Is Connected to MongoDB')
}).catch((err) => {
    console.log('An error occurred', err)
})