const mongoose = require("mongoose");

const xyz_Schema = mongoose.Schema(
  {
    xyz_name: {
      type: String,
      trim: true,
      default: "abc",
    },
    xyz_number: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const xyz = mongoose.model("Xyz", xyz_Schema);

module.exports = xyz;
