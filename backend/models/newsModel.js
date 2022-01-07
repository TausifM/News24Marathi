const mongoose = require("mongoose");

const newsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please Enter Title"],
      trim: true,
    },
    content: {
      type: String,
      required: [true, "Please Enter Content"],
    },
    // img: { type: String}, //required: [true, "Please Enter Image"] },
    // imgTitle: { type: String}, //required: [true, "Please Enter Image"] },
    // imgSm: { type: String },
    // trailer: { type: String },
    // video: { type: String },
    // date: {
    //   type: Date,
    //   default: Date.now,
    // },
  },
  { timestamps: true }
);
module.exports = mongoose.model("News", newsSchema);
