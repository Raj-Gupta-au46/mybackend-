const mongoose = require("mongoose");

const newPubliserSchema = new mongoose.Schema(
  { 
    name: {
      type: String,
      required: true
    },
    headQuarter:{
        type:String,
        required:true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("newPublisher", newPubliserSchema);