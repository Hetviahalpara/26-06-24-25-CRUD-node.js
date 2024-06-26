const mongoose = require("mongoose");

const Set4_Schema = mongoose.Schema(
  {
    Set4_name: {
      type: String,
      trim: true,
      default: "abc",
    },
    Set4_number: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Set4 = mongoose.model("Set4", Set4_Schema);

module.exports = Set4;
