const mongoose = require("mongoose");

const blog_Schema = mongoose.Schema(
  {
    blog_name: {
      type: String,
      trim: true,
      default: "abc",
    },
    blog_number: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const blog = mongoose.model("Blog", blog_Schema);

module.exports = blog;
