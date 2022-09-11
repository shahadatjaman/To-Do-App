const validator = require("validator");

const userValidator = ({ email, password }) => {
  let error = {};

  if (!email) {
    error.email = "Please Provide Your Email!";
  } else if (!validator.isEmail(email)) {
    error.email = "Invalid Email!";
  }
  if (!password) {
    error.password = "Please Provide Your Password";
  } else if (password.length < 6) {
    error.password = "Password Must Be Greater or Equal than 7";
  }

  return {
    error,
    isValid: Object.keys(error).length === 0,
  };
};

module.exports = userValidator;
