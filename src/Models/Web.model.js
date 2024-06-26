const mongoose = require("mongoose");

const web_Schema = mongoose.Schema(
  {
    web_name: {
      type: String,
      trim: true,
      default: "abc",
    },
    web_number: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const web = mongoose.model("Web", web_Schema);

module.exports = web;
