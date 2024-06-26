const mongoose = require("mongoose");

const music_Schema = mongoose.Schema(
  {
    music_name: {
      type: String,
      trim: true,
      default: "abc",
    },
    music_number: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const music = mongoose.model("Music", music_Schema);

module.exports = music;
