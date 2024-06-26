const mongoose = require("mongoose");

const horror_Schema = mongoose.Schema(
  {
    horror_name: {
      type: String,
      trim: true,
      default: "abc",
    },
    horror_number: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const horror = mongoose.model("Horror", horror_Schema);

module.exports = horror;
