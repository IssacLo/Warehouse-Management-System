const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// const ImageSchema = new Schema({
//   url: String,
//   filename: String,
// });

const itemSchema = new mongoose.Schema({
  // id: { type: String },
  // user_id: { type: String },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  general: {
    itemDescription: { type: String, required: true },
    category: { type: String, required: true },
    model: { type: String, required: true },
    serialNumber: { type: String, required: true },
    itemStatus: { type: String, required: true },
    remarks: { type: String },
  },
  vendor: {
    vendor: String,
    originalInvoice: String,
    purchaseCost: String,
    purchaseDate: Date,
  },
  client: {
    client: String,
    clientInvoice: String,
    clientContractExpirationDate: Date,
    // warrantyPeriod: Array,
    warrantyStartDate: Date,
    warrantyEndDate: Date,
    warrantyTC: String,
  },
  serviceCenter: {
    address: String,
    phoneNumber: Number,
  },
});

module.exports = mongoose.model("Item", itemSchema);
