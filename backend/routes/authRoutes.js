const express = require("express");
const router = express.Router();
const { registerUser, loginUser } = require("../controllers/authController");

// Endpoint Register
router.post("/register", registerUser);

// Endpoint Login
router.post("/login", loginUser);

module.exports = router;
