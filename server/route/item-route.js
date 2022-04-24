const router = require("express").Router();
// const Item = require("../models/item-model");
const Item = require("../models").itemModel;
const { cloudinary } = require("../cloudinary");
const schedule = require("node-schedule");

router.use((req, res, next) => {
  console.log("A request is coming in to api..");
  next();
});

router.get("/", (req, res) => {
  // console.log("working");

  Item.find({})
    .then((item) => {
      // console.log("item", item);
      res.send(item);
    })
    .catch(() => {
      res.status(500).send("Error");
    });
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
  // console.log(req.body.user._id);
  // console.log("==================================");
  // let originalInvoice1;
  let {
    general: { itemDescription, category, model, serialNumber, itemStatus, remarks },
    vendor: { vendor, originalInvoice, purchaseCost, purchaseDate },
    client: {
      client,
      clientInvoice,
      clientContractExpirationDate,
      warrantyStartDate,
      warrantyEndDate,
      warrantyTC,
    },
    serviceCenter: { address, phoneNumber },
  } = req.body;

  // Date.prototype.addDays = function (days) {
  //   const date = new Date(this.valueOf());
  //   date.setDate(date.getDate() - days);
  //   return date;
  // };

  // const newDate = clientContractExpirationDate.addDays(7);

  // console.log(date.addDays(5));

  // const mailOptions = {
  //   from: "issaclo303@gmail.com",
  //   to: "kitttlooo@gmail.com",
  //   subject: "Client Contract Expiration Date",
  //   text: "hello! Success!",
  // };

  // //email transport config
  // const transporter = nodemailer.createTransport({
  //   service: "gmail",
  //   auth: {
  //     user: "issaclo303@gmail.com",
  //     pass: "5b6b1818",
  //   },
  // });

  // schedule.scheduleJob(clientContractExpirationDate, () => {
  //   console.log("===============================================");
  //   transporter.sendMail(mailOptions, (error, info) => {
  //     if (error) {
  //       console.log(error);
  //     } else {
  //       console.log("Email send" + info.response);
  //     }
  //   });
  //   // job.cancel();
  // });

  //upload image
  try {
    const uploadImage = await cloudinary.uploader.upload(originalInvoice, {
      upload_preset: "Warehouse management system",
    });
    // console.log(uploadImage);
    originalInvoice = uploadImage.secure_url;
    // console.log(originalInvoice1, "originalInvoice1");
    res.json({ message: "Image uploaded" });
  } catch (error) {
    // console.error(error);
    res.status(500).json({ message: "Can't upload image" });
  }
  // console.log(originalInvoice, "123");

  let newItem = new Item({
    user: req.body.user._id,
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
      warrantyStartDate,
      warrantyEndDate,
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

router.post("/allItem", (req, res) => {
  // console.log(req.params, "req.params");
  let { _id } = req.body._id;
  // console.log(_id);

  // console.log(req.body, "sdasdasdasdasasdassa");

  Item.find({ user: _id })
    // .populate("instructor", ["username", "email"])
    .then((data) => {
      // console.log(data, "data");
      res.send(data);
    })
    .catch(() => {
      res.status(500).send("Cannot get course data");
    });
});

router.post("/oneItem/:_id", (req, res) => {
  // console.log(req.params, "req.params");
  // console.log(req);
  // console.log("========");
  let { _id } = req.params;
  console.log(_id, "id");
  console.log(req.params, "id");

  // console.log(req.body, "sdasdasdasdasasdassa");

  Item.find({ _id: _id })
    // .populate("user")
    .then((data) => {
      // console.log(data, "data");
      res.send(data);
    })
    .catch(() => {
      res.status(500).send("Cannot get course data");
    });
});

module.exports = router;
