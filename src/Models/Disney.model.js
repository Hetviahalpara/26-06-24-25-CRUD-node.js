const mongoose = require("mongoose");

const disney_Schema = mongoose.Schema(

  {
    disney_name: {
      type: String,
      trim: true,
      default: "abc",
    },
    disney_number: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const disney = mongoose.model("Disney", disney_Schema);

module.exports = disney;
