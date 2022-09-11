const router = require("express").Router();
const passport = require("passport");
const CLIENT_URL = "http://localhost:3000/";
const authChecker = require("../authenticate");

const {
  loginSuccess,
  loginFailed,
  logOut,
  addTodo,
} = require("../controller/user");

router.get("/login/success", loginSuccess);

router.get("/login/failed", loginFailed);

router.get("/logout", logOut);

// Login with Google
router.get("/google", passport.authenticate("google", { scope: ["profile"] }));

// Login Callback with Google
router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: CLIENT_URL,
    failureRedirect: "/login/failed",
  }),
  (req, res) => {
    res.status(200).json({
      message: "Login Success",
    });
  }
);

// Login with GitHub
router.get("/github", passport.authenticate("github", { scope: ["profile"] }));

// Login Callback with GitHub
router.get(
  "/github/callback",
  passport.authenticate("github", {
    successRedirect: CLIENT_URL,
    failureRedirect: "/login/failed",
  })
);

// Login with Facebook
router.get(
  "/facebook",
  passport.authenticate("facebook", { scope: ["profile"] })
);

// Login Callback with Facebook
router.get(
  "/facebook/callback",
  passport.authenticate("facebook", {
    successRedirect: CLIENT_URL,
    failureRedirect: "/login/failed",
  })
);

// Create Todo List
router.post("/addtodo", addTodo);

module.exports = router;
