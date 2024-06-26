const mongoose = require("mongoose");

const set3_Schema = mongoose.Schema(
  {
    set3_name: {
      type: String,
      trim: true,
      default: "abc",
    },
    set3_number: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const set3 = mongoose.model("Set3", set3_Schema);

module.exports = set3;
