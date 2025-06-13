const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "", // atau passwordmu
  database: "healthymate",
});

db.connect((err) => {
  if (err) {
    console.error("❌ Gagal terhubung ke database:", err);
  } else {
    console.log("✅ Terhubung ke database");
  }
});

module.exports = db;
