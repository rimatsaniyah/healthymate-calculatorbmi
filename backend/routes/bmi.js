const express = require("express");
const router = express.Router();
const db = require("../config/db");

// -------------------- POST /api/bmi --------------------
// Simpan data BMI
router.post("/", (req, res) => {
  const {
    user_id,
    jenis_kelamin,
    tinggi,
    berat,
    usia,
    tanggal,
    bmi,
    kategori,
  } = req.body;

  console.log("📥 Data BMI diterima:", req.body);

  // Validasi field wajib
  if (
    user_id === undefined || !jenis_kelamin || !tinggi || !berat ||
    !usia || !tanggal || !bmi || !kategori
  ) {
    return res.status(400).json({ message: "Semua field wajib diisi" });
  }

  // Validasi user_id adalah angka
  if (!Number.isInteger(Number(user_id))) {
    return res.status(400).json({ message: "User ID harus berupa angka" });
  }

  // Cek apakah user_id valid (ada di tabel users)
  const checkUserSql = "SELECT id FROM users WHERE id = ?";
  db.query(checkUserSql, [user_id], (checkErr, checkResults) => {
    if (checkErr) {
      console.error("❌ Gagal cek user_id:", checkErr);
      return res.status(500).json({ message: "Server error saat cek user" });
    }

    if (checkResults.length === 0) {
      return res.status(400).json({ message: "User ID tidak ditemukan" });
    }

    // Insert ke bmi_history
    const insertSql = `
      INSERT INTO bmi_history (user_id, jenis_kelamin, tinggi, berat, usia, tanggal, bmi, kategori)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;
    db.query(
      insertSql,
      [user_id, jenis_kelamin, tinggi, berat, usia, tanggal, bmi, kategori],
      (err, result) => {
        if (err) {
          console.error("❌ Gagal insert ke database:", err);
          return res.status(500).json({ message: "Gagal menyimpan data BMI" });
        }

        return res.status(201).json({
          message: "✅ Data BMI berhasil disimpan",
          inserted_id: result.insertId,
        });
      }
    );
  });
});

// -------------------- GET /api/bmi/:user_id --------------------
router.get("/:user_id", (req, res) => {
  const { user_id } = req.params;

  if (!/^\d+$/.test(user_id)) {
    return res.status(400).json({ message: "User ID tidak valid" });
  }

  const sql = "SELECT * FROM bmi_history WHERE user_id = ? ORDER BY tanggal DESC";
  db.query(sql, [user_id], (err, results) => {
    if (err) {
      console.error("❌ Gagal mengambil data:", err);
      return res.status(500).json({ message: "Gagal mengambil data" });
    }

    if (results.length === 0) {
      return res.status(404).json({ message: "Data BMI tidak ditemukan untuk user ini" });
    }

    return res.status(200).json(results);
  });
});

module.exports = router;
