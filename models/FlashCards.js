const mongoose = require("mongoose");

const FlashCardsScheme = mongoose.Schema({
  word1: {
    type: String,
    required: true,
  },
  word2: {
    type: String,
    required: true,
  },
  archive: {
    type: Boolean,
    default: false,
  },
  difficult: {
    type: Boolean,
    default: false,
  },
  easy: {
    type: Boolean,
    default: false,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("FlashCards", FlashCardsScheme);
