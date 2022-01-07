const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
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
    warrantyPeriod: Date,
    warrantyTC: String,
  },
  serviceCenter: {
    address: String,
    phoneNumber: Number,
  },
});

module.exports = mongoose.model("Item", itemSchema);
