// routes/authRoutes.js

const express = require("express");
const router = express.Router();
const { registerUser, loginUser } = require("../controllers/authController");

// Route daftar
router.post("/signup", registerUser);

// Route login
router.post("/login", loginUser);

// Route untuk testing
router.get("/ping", (req, res) => {
  res.send("Auth route aktif!");
});

module.exports = router;
