const express = require("express");
const { login, register } = require("../controllers/authController");
const router = express.Router();

router.post("/login", login);
router.post("/register", register); // ✅ ini ditambahkan

module.exports = router;
