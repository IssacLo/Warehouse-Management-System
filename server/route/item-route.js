const router = require("express").Router();
const Item = require("../models/item-model");

router.use((req, res, next) => {
  console.log("A request is coming in to api..");
  next();
});

router.post("/", async (req, res) => {
  // try {
  //   console.log("req.body = ", req.body);
  // const item = await Item.create(req.body);
  // console.log("item = ", item);
  //   await item.save();
  //   res.status(200).json({
  //     message: "i received!",
  //   });
  // } catch (error) {
  //   console.log(error);
  // }

  let {
    general: { itemDescription, category, model, serialNumber, itemStatus, remarks },
    vendor: { vendor, originalInvoice, purchaseCost, purchaseDate },
    client: { client, clientInvoice, clientContractExpirationDate, warrantyPeriod, warrantyTC },
    serviceCenter: { address, phoneNumber },
  } = req.body;

  let newItem = new Item({
    general: {
      itemDescription,
      category,
      model,
      serialNumber,
      itemStatus,
      remarks,
    },
    vendor: {
      vendor,
      originalInvoice,
      purchaseCost,
      purchaseDate,
    },
    client: {
      client,
      clientInvoice,
      clientContractExpirationDate,
      warrantyPeriod,
      warrantyTC,
    },
    serviceCenter: {
      address,
      phoneNumber,
    },
  });

  try {
    await newItem.save();
    res.status(200).send("New item has been saved");
    console.log("New item has been saved");
  } catch (err) {
    res.status(400).send("Cannot save the items");
  }
});

module.exports = router;
