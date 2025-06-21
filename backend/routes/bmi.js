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
      console.error("❌ Gagal insert ke database:", err);
      return res.status(500).json({ message: "Gagal menyimpan data BMI", error: err });
    }

    res.status(201).json({ message: "✅ Data BMI berhasil disimpan" });
  });
});

// Ambil data BMI berdasarkan user_id
router.get("/:user_id", (req, res) => {
  const { user_id } = req.params;
  const sql = "SELECT * FROM bmi_history WHERE user_id = ? ORDER BY tanggal DESC";

  db.query(sql, [user_id], (err, results) => {
    if (err) {
      console.error("❌ Gagal mengambil data:", err);
      return res.status(500).json({ message: "Gagal mengambil data", error: err });
    }

    res.status(200).json(results);
  });
});

module.exports = router;
