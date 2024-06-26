const mongoose = require("mongoose");

const abc_Schema = mongoose.Schema(
  {
    abc_name: {
      type: String,
      trim: true,
      default: "abc",
    },
    abc_number: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const abc = mongoose.model("Abc", abc_Schema);

module.exports = abc;
