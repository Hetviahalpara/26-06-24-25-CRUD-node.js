const mongoose = require("mongoose");

const account_Schema = mongoose.Schema(
  {
    account_fname: {
      type: String,
      trim: true,
    },
    account_lname: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const account = mongoose.model("Account", account_Schema);

module.exports = account;
