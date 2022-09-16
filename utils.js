const jwt = require("jsonwebtoken");

module.exports = {
  jwt_token({ _id, email }) {
    let token = jwt.sign(
      {
        _id,
        email,
      },
      "SECRET",
      { expiresIn: "10h" }
    );

    return token;
  },
};
