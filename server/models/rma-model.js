const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// const ImageSchema = new Schema({
//   url: String,
//   filename: String,
// });

const rmaSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  userName: { type: String, required: true },
  userEmail: { type: String, required: true },
  returnNumber: { type: String, required: true },
  category: { type: String, required: true },
  model: { type: String, required: true },
  serialNumber: { type: String, required: true },
  details: { type: String, required: true },
  request: { type: String, required: true },
  address: { type: String, required: true },
  phoneNumber: { type: Number, required: true },
});

module.exports = mongoose.model("RMA", rmaSchema);
