const router = require("express").Router();
const RMA = require("../models").rmaModel;
const { cloudinary } = require("../cloudinary");
const schedule = require("node-schedule");
const nodemailer = require("nodemailer");

router.use((req, res, next) => {
  console.log("A request is coming in to api..");
  next();
});

router.post("/", async (req, res) => {
  let { category, model, serialNumber, details, request, address, phoneNumber, user } = req.body;
  // console.log(user, "body");

  //upload image

  //   try {
  //     const uploadImage = await cloudinary.uploader.upload(originalInvoice, {
  //       upload_preset: "Warehouse management system",
  //     });

  //     originalInvoice = uploadImage.secure_url;

  //     res.json({ message: "Image uploaded" });
  //   } catch (error) {

  //     res.status(500).json({ message: "Can't upload image" });
  //   }

  // Serial Number Generator
  const digits = "1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
  const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
  const timeStr = `${year}${month}${day}`;

  let serial = "RE" + timeStr;

  for (let i = 0; i < 10; i++) {
    let rand = Math.floor(Math.random() * digits.length);
    serial += digits[rand];
  }
  // console.log(serial);

  //email message option
  const mailOptions = {
    from: "issaclo303@gmail.com",
    to: user.email,
    subject: "Return are Success",
    text: `return number is ${serial}`,
  };

  //email transport config
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "issaclo303@gmail.com",
      pass: "5b6b1818",
    },
  });

  let newRMA = new RMA({
    userId: user._id,
    userName: user.username,
    userEmail: user.email,
    returnNumber: serial,
    category,
    model,
    serialNumber,
    details,
    request,
    address,
    phoneNumber,
  });
  try {
    await newRMA.save();
    res.status(200).send("New return apply has been saved");
    console.log("New item has been saved");

    //send email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
      } else {
        console.log("Email send" + info.response);
      }
    });
  } catch (err) {
    res.status(400).send("Cannot save the items");
  }
});

module.exports = router;
