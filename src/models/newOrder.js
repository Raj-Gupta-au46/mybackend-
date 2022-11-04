const mongoose = require("mongoose");
const ObjectId=mongoose.Schema.Types.ObjectId;

const newOrderSchema = new mongoose.Schema(
  {
    userId: {
      type:ObjectId,
      ref: "NewUser",
    },
    productId: {
        type: ObjectId,
        ref: "NewProduct",
      },
    amount: Number, 
    isFreeAppUser: {
      type: Boolean,
      default: false,
    }, 
    date: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("NewOrder", newOrderSchema);
