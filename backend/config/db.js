// backend/config/db.js

const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",         // sesuaikan jika kamu pakai user lain
  password: "",         // sesuaikan password MySQL kamu
  database: "healthymate" // pastikan database ini sudah dibuat
});

module.exports = db;
