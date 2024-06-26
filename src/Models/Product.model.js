const mongoose = require("mongoose");

const product_Schema = mongoose.Schema(
  {
    product_name: {
      type: String,
      trim: true,
      default: "abc",
    },
    product_number: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const product = mongoose.model("Product", product_Schema);

module.exports = product;
