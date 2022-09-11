const express = require("express");
const app = express();
const { createServer } = require("http");
const bodyParser = require("body-parser");
const httpServer = createServer(app);
const { mongoose } = require("mongoose");
const passport = require("passport");
const cors = require("cors");

const authRoute = require("./routes/auth");
require("dotenv").config();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.use(passport.initialize());
require("./passport")(passport);

app.use("/auth", authRoute);
mongoose
  .connect("mongodb://localhost:27017/myRandomDB")
  .then((res) => {
    console.log("DB Connected!");
    httpServer.listen(process.env.PORT || 5000, () => {
      console.log("Server is running!");
    });
  })
  .catch((error) => {
    console.log(error);
  });