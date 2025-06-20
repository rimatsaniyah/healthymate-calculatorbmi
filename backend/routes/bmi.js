// routes/bmi.js
const express = require("express");
const router = express.Router();
const db = require("../config/db");

// Simpan data BMI
router.post("/", (req, res) => {
  const { user_id, jenis_kelamin, tinggi, berat, usia, tanggal, bmi, kategori } = req.body;

  if (!user_id || !jenis_kelamin || !tinggi || !berat || !usia || !tanggal || !bmi || !kategori) {
    return res.status(400).json({ message: "Semua field wajib diisi" });
  }

  const sql = `
    INSERT INTO bmi_history (user_id, jenis_kelamin, tinggi, berat, usia, tanggal, bmi, kategori)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `;

  db.query(sql, [user_id, jenis_kelamin, tinggi, berat, usia, tanggal, bmi, kategori], (err, result) => {
    if (err) {
      console.error("DB Insert Error:", err);
      return res.status(500).json({ message: "Gagal menyimpan data BMI", error: err });
    }

    res.status(201).json({ message: "Data BMI berhasil disimpan" });
  });
});

module.exports = router;
