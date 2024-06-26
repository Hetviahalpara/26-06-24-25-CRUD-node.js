const mongoose = require("mongoose");

const disk_Schema = mongoose.Schema(

  {
    disk_name: {
      type: String,
      trim: true,
      default: "abc",
    },
    disk_number: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const disk = mongoose.model("Disk", disk_Schema);

module.exports = disk;
