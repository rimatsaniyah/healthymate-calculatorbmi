// controllers/authController.js
const db = require("../config/db");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// ---------------- REGISTER ----------------
exports.registerUser = (req, res) => {
  const { username, email, password } = req.body;

  console.log("📥 Data masuk ke register:", req.body);

  if (!username || !email || !password) {
    return res.status(400).json({ message: "Semua field wajib diisi" });
  }

  const checkSql = "SELECT * FROM users WHERE email = ?";
  db.query(checkSql, [email], (checkErr, checkResults) => {
    if (checkErr) {
      console.error("❌ Gagal mengecek email:", checkErr);
      return res.status(500).json({ message: "Terjadi kesalahan pada server" });
    }

    if (checkResults.length > 0) {
      return res.status(409).json({ message: "Email sudah terdaftar" });
    }

    const hashedPassword = bcrypt.hashSync(password, 10);

    const insertSql = "INSERT INTO users (username, email, password_hash) VALUES (?, ?, ?)";
    db.query(insertSql, [username, email, hashedPassword], (insertErr, result) => {
      if (insertErr) {
        console.error("❌ Gagal menyimpan user:", insertErr);
        return res.status(500).json({ message: "Gagal mendaftarkan akun" });
      }

      res.status(201).json({ message: "✅ Registrasi berhasil" });
    });
  });
};

// ---------------- LOGIN ----------------
exports.loginUser = (req, res) => {
  const { email, password } = req.body;

  console.log("📥 Data masuk ke login:", req.body);

  if (!email || !password) {
    return res.status(400).json({ message: "Email dan password tidak boleh kosong" });
  }

  const sql = "SELECT * FROM users WHERE email = ?";
  db.query(sql, [email], (err, results) => {
    if (err) {
      console.error("❌ Gagal mengambil data user:", err);
      return res.status(500).json({ message: "Terjadi kesalahan pada server" });
    }

    if (results.length === 0) {
      return res.status(401).json({ message: "Email atau password salah" });
    }

    const user = results[0];
    const isPasswordValid = bcrypt.compareSync(password, user.password_hash);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Email atau password salah" });
    }

    const token = jwt.sign({ id: user.id, email: user.email }, "RAHASIA", { expiresIn: "1h" });

    res.status(200).json({
      message: "Login berhasil",
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
      },
      token,
    });
  });
};
