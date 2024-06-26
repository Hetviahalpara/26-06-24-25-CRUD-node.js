const mongoose = require("mongoose");

const sport_Schema = mongoose.Schema(
  {
    sport_name: {
      type: String,
      trim: true,
      default: "abc",
    },
    sport_number: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const sport = mongoose.model("Sport", sport_Schema);

module.exports = sport;
