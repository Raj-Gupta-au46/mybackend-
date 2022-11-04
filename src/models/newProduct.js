const mongoose = require("mongoose");

const newProductSchema = new mongoose.Schema(
  {
    product_name: String,
    category: String,
    price: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("NewProduct", newProductSchema);