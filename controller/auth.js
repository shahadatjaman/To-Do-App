const userValidator = require("../validation/userValidation");

const User = require("../model/user");

const bcrypt = require("bcryptjs");

const { serverError, clientError, successLogin } = require("../errors/errors");

const { jwt_token } = require("../utils");

const { loginvalidation } = require("../validation/loginValidation");

module.exports = {
  // Register
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

      let token = jwt_token(_id, email);
      return res.status(200).json({ token });
    });
  },
  // Login
  async login(req, res) {
    let { email, password } = req.body;
    let { errors, isValid } = loginvalidation({ email, password });

    if (!isValid) {
      return clientError(res, errors);
    }

    let user = await User.findOne({ email });
    if (!user) {
      return clientError(res, "nvalid User! try agin");
    }

    let result = await bcrypt.compare(password, user.password);

    if (!result) {
      return clientError(res, "Invalid User! try agin");
    }
    const token = jwt_token(user._id, user.email);
    successLogin({ res, token, message: "Login Success!" });
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
