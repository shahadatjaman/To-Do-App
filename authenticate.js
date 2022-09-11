const jwt_decode = require("jwt-decode");

const authenticate = (req, res, next) => {
  const token = req.headers.authorization;
  const user = jwt_decode(token);
  return res.send(user);
};

module.exports = authenticate;
