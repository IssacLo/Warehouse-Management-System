const nodemailer = require("nodemailer");

//email message option
const mailOptions = {
  from: "issaclo303@gmail.com",
  to: "kitttlooo@gmail.com",
  subject: "test email API",
  text: "hello! Success!",
};

//email transport config
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "issaclo303@gmail.com",
    pass: "5b6b1818",
  },
});

//send email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Email send" + info.response);
  }
});
