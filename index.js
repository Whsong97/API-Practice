const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()

const booksRoutes = require('./controllers/books')

const app = express()

// Milddlewares
app.use(express.json())


// Routes
app.use('/books', booksRoutes)

// DB Connection
mongoose.set('strictQuery', true)
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('DB connected'))
    .catch(err => console.error(err));

const PORT = process.env.PORT || 8080

app.listen(PORT, console.log(`listening on ${PORT}`))