const mongoose = require("mongoose");

const set2_Schema = mongoose.Schema(
  {
    set2_name: {
      type: String,
      trim: true,
      default: "abc",
    },
    set2_number: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const set2 = mongoose.model("Set2", set2_Schema);

module.exports = set2;
