const mongoose = require("mongoose");

const book_Schema = mongoose.Schema(
  {
    book_name: {
      type: String,
      trim: true,
      default: "abc",
    },
    book_number: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const book = mongoose.model("Book", book_Schema);

module.exports = book;
