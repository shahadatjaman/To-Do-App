const express = require("express");
const app = express();
const { createServer } = require("http");
const bodyParser = require("body-parser");
const httpServer = createServer(app);
const { mongoose } = require("mongoose");
const passport = require("passport");
const cors = require("cors");
import path from "path";

const authRoute = require("./routes/auth");
require("dotenv").config();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.use(passport.initialize());
require("./passport")(passport);

app.use("/auth", authRoute);
app.use("/", require("./routes/task"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome",
  });
});
mongoose
  .connect(process.env.DB_URL)
  .then((res) => {
    console.log("DB Connected!");
    httpServer.listen(process.env.PORT || 5000, () => {
      console.log("Server is running!");
    });
  })
  .catch((error) => {
    console.log(error);
  });
