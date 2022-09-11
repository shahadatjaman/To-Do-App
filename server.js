const express = require("express");
const app = express();
const { createServer } = require("http");
const httpServer = createServer(app);
const { mongoose } = require("mongoose");
const passport = require("passport");

const cookieSession = require("cookie-session");
const cors = require("cors");

const authRoute = require("./routes/user");
require("dotenv").config();

app.use(cors());
// Usee Cookie Session
app.use(
  cookieSession({
    name: "session",
    keys: ["abuhuraia"],
    maxAge: 24 * 60 * 60 * 100,
  })
);
app.use(passport.initialize());
app.use(passport.session());
require("./passport");

app.use("/data", (req, res) => {
  console.log(req.sessionOptions.maxAge);
});
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
