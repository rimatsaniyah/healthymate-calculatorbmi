const db = require("../config/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Fungsi untuk daftar akun
exports.registerUser = async (req, res) => {
  const { nama, email, password } = req.body;

  if (!nama || !email || !password) {
    return res.status(400).json({ message: "Semua field wajib diisi" });
  }

  try {
    // Cek apakah email sudah digunakan
    db.query("SELECT * FROM users WHERE email = ?", [email], async (err, results) => {
      if (err) return res.status(500).json({ message: "Database error", error: err });

      if (results.length > 0) {
        return res.status(400).json({ message: "Email sudah terdaftar" });
      }

      // Hash password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Simpan user baru
      db.query(
        "INSERT INTO users (nama, email, password) VALUES (?, ?, ?)",
        [nama, email, hashedPassword],
        (err, result) => {
          if (err) {
            return res.status(500).json({ message: "Gagal mendaftar", error: err });
          }

          res.status(200).json({ message: "Pendaftaran berhasil" });
        }
      );
    });
  } catch (error) {
    res.status(500).json({ message: "Terjadi kesalahan server", error });
  }
};

// Fungsi untuk login
exports.loginUser = (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email dan password wajib diisi" });
  }

  // Cek user
  db.query("SELECT * FROM users WHERE email = ?", [email], async (err, results) => {
    if (err) return res.status(500).json({ message: "Database error", error: err });

    if (results.length === 0) {
      return res.status(401).json({ message: "Email tidak ditemukan" });
    }

    const user = results[0];

    // Cocokkan password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ message: "Password salah" });
    }

    // Buat token JWT (optional)
    const token = jwt.sign({ id: user.id, email: user.email }, "rahasia", {
      expiresIn: "1h",
    });

    res.status(200).json({
      message: "Login berhasil",
      user: { id: user.id, nama: user.nama, email: user.email },
      token,
    });
  });
};
