const mongoose = require("mongoose");

const user_Schema = mongoose.Schema(
  {
    user_name: {
      type: String,
      trim: true,
      default: "abc",
    },
    user_number: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const user = mongoose.model("User", user_Schema);

module.exports = user;
