const userValidator = require("../validation/userValidation");

const User = require("../model/user");

const jwt = require("jsonwebtoken");

const bcrypt = require("bcryptjs");

const { serverError } = require("../errors/errors");

module.exports = {
  async register(req, res) {
    let { email, password } = req.body;
    let errors = userValidator({ email, password });

    if (!errors.isValid) {
      return res.status(400).json({ error: errors.error });
    }
    let user = await User.findOne({ email });

    // If Already Exist
    if (user) {
      return res.status(400).json({
        message: "EmaiL Already Exist!",
      });
    }

    // Create new user
    // Hash Password
    bcrypt.hash(password, 10, async (error, hash) => {
      if (error) {
        serverError(res, "Server error Occurred!");
      }
      let newUser = new User({
        email,
        password: hash,
      });
      let { _id } = await newUser.save();

      // JWT

      let token = jwt.sign(
        {
          _id,
          email,
        },
        "SECRET",
        { expiresIn: "2h" }
      );
      return res.status(200).json({ token });
    });
  },
  async checkUser(req, res) {
    let { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: "Must provid Email!" });
    }

    let user = await User.findOne({ email: email });

    if (!user) {
      return res.status(200).json({ email });
    } else {
      return res.status(409).json({
        message: "Your Email Already Exist!",
      });
    }
  },
};
