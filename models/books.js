const mongoose = require ('mongoose')

const booksSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    year: {
        type: Number,
        required: true,
        min: 1970
    },
})

module.exports = mongoose.model('Book', booksSchema)