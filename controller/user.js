const passport = require("passport");

module.exports = {
  async loginSuccess(req, res) {
    if (req.user) {
      res.status(200).json({
        success: true,
        message: "successfull",
        user: req.user,
        //   cookies: req.cookies
      });
    }
  },
  async loginFailed(req, res) {
    res.status(401).json({
      success: false,
      message: "failure",
    });
  },
  async logOut(req, res) {
    req.logout();
    res.redirect(CLIENT_URL);
  },
  async addTodo(req, res) {
    console.log(res);
    res.send("Hello");
  },
};
