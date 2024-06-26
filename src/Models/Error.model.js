const mongoose = require("mongoose");

const error_Schema = mongoose.Schema(

  {
    error_name: {
      type: String,
      trim: true,
      default: "abc",
    },
    error_number: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const error = mongoose.model("Error", error_Schema);

module.exports = error;
