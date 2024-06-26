const mongoose = require("mongoose");

const comdey_Schema = mongoose.Schema(
  {
    comdey_name: {
      type: String,
      trim: true,
      default: "abc",
    },
    comdey_number: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const comdey = mongoose.model("Comdey", comdey_Schema);

module.exports = comdey;
