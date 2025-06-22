// routes/authRoutes.js
const express = require("express");
const router = express.Router();
const { registerUser, loginUser } = require("../controllers/authController");

// Endpoint Signup
router.post("/signup", registerUser); // ✅ disamakan dengan frontend

// Endpoint Login
router.post("/login", loginUser);

module.exports = router;
