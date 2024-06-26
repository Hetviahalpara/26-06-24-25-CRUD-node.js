const mongoose = require("mongoose");

const movie_Schema = mongoose.Schema(
  {
    movie_name: {
      type: String,
      trim: true,
      default: "abc",
    },
    movie_number: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const movie = mongoose.model("Movie", movie_Schema
);

module.exports = movie;
