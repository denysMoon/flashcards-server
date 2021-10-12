const mongoose = require('mongoose')

const FlashCardsScheme = mongoose.Schema({
    word: {
        type: String,
        required: true
    },
    definition: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('FlashCards', FlashCardsScheme)