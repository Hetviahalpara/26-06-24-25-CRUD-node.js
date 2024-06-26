const mongoose = require("mongoose");

const image_Schema = mongoose.Schema(
  {
    image_name: {
      type: String,
      trim: true,
      default: "abc",
    },
    image_number: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const image = mongoose.model("Image", image_Schema);

module.exports = image;
