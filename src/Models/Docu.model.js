const mongoose = require("mongoose");

const docu_Schema = mongoose.Schema(

  {
    docu_name: {
      type: String,
      trim: true,
      default: "abc",
    },
    docu_number: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const docu = mongoose.model("Docu", docu_Schema);

module.exports = docu;
