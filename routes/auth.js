const router = require("express").Router();

const { register, checkUser, login } = require("../controller/auth");

// Check User
router.post("/checkuser", checkUser);

// Sign Up
router.post("/register", register);

// Login
router.post("/login", login);
module.exports = router;
