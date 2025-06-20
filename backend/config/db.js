// backend/config/db.js

const mysql = require("mysql");
const dotenv = require("dotenv");

// Load variabel dari .env
dotenv.config();

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

// Cek koneksi
db.connect((err) => {
  if (err) {
    console.error("❌ Gagal koneksi ke database:", err.message);
  } else {
    console.log("✅ Terhubung ke database MySQL.");
  }
});

module.exports = db;
