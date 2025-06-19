const express = require("express");
const router = express.Router();
const db = require("../config/db");

router.post("/", (req, res) => {
  const {
    user_id,
    jenis_kelamin,
    tinggi,
    berat,
    usia,
    tanggal_timbang,
    bmi,
    kategori
  } = req.body;

  if (
    !user_id || !jenis_kelamin || !tinggi || !berat ||
    !usia || !tanggal_timbang || !bmi || !kategori
  ) {
    return res.status(400).json({ message: "Semua field wajib diisi" });
  }

  const sql = `
    INSERT INTO bmi_history 
    (user_id, jenis_kelamin, tinggi, berat, usia, tanggal_timbang, bmi, kategori) 
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `;
  const values = [user_id, jenis_kelamin, tinggi, berat, usia, tanggal_timbang, bmi, kategori];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error("Gagal menyimpan data BMI:", err);
      return res.status(500).json({ message: "Gagal menyimpan data BMI" });
    }
    res.status(201).json({ message: "Data BMI berhasil disimpan", id: result.insertId });
  });
});

module.exports = router;
