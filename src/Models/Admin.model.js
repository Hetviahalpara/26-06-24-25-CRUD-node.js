const mongoose = require("mongoose");

const admin_Schema = mongoose.Schema(
  {
    admin_fname: {
      type: String,
      trim: true,
    },
    admin_lname: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const admin = mongoose.model("Admin", admin_Schema);

module.exports = admin;
