const mongoose = require("mongoose");

const event_Schema = mongoose.Schema(
  {
    event_name: {
      type: String,
      trim: true,
      default: "abc",
    },
    event_number: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const event = mongoose.model("Event", event_Schema);

module.exports = event;
