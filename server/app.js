const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const itemRoute = require("./route/item-route");
const authRoute = require("./route/auth-route");
const rmaRoute = require("./route/rma-route");
const Item = require("./models/item-model");
const PORT = process.env.PORT || 8080;

//connect to DB
mongoose
  .connect(process.env.MongoDB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connect to Mongo Altas");
  })
  .catch((e) => {
    console.log("Mongo Altas Error");
  });

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/api/user", authRoute);
// app.use("/api/item", passport.authenticate("jwt", { session: false }), itemRoute);
app.use("/api/item", itemRoute);
app.use("/api/rma", rmaRoute);
// app.use(itemRoute);

app.listen(8080, () => {
  console.log(`server running on port ${PORT}`);
});
