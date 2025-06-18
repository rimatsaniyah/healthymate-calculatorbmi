// routes/bmi.js

const express = require("express");
const router = express.Router();
const db = require("../config/db"); // file koneksi database

// POST /api/bmi
router.post("/", (req, res) => {
  const { weight, height, age, date, bmi, category } = req.body;

  const sql =
    "INSERT INTO bmi_records (weight, height, age, date, bmi, category) VALUES (?, ?, ?, ?, ?, ?)";
  const values = [weight, height, age, date, bmi, category];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error("Gagal menyimpan data BMI:", err);
      return res.status(500).json({ message: "Gagal menyimpan data BMI" });
    }
    res.status(201).json({ message: "Data BMI berhasil disimpan", id: result.insertId });
  });
});

module.exports = router;
