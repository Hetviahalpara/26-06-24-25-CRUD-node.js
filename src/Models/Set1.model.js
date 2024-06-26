const mongoose = require("mongoose");

const Set1_Schema = mongoose.Schema(
  {
    Set1_name: {
      type: String,
      trim: true,
      default: "abc",
    },
    Set1_number: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Set1 = mongoose.model("Set1", Set1_Schema);

module.exports = Set1;
