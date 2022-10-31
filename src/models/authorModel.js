const mongoose = require("mongoose");

const newAuthorSchema = new mongoose.Schema(
  {
    author_name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    address: {
        type: String,
        required: true,
      },
    ratings: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("NewAuthor", newAuthorSchema);
