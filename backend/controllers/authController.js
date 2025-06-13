exports.register = (req, res) => {
  const { nama, email, password } = req.body;

  // Cek apakah email sudah digunakan
  const checkEmailSql = "SELECT * FROM users WHERE email = ?";
  db.query(checkEmailSql, [email], (err, results) => {
    if (err) return res.status(500).json({ error: "Server error saat cek email" });

    if (results.length > 0) {
      return res.status(400).json({ message: "Email sudah terdaftar" });
    }

    // Simpan user baru
    const insertUserSql = "INSERT INTO users (nama, email, password) VALUES (?, ?, ?)";
    db.query(insertUserSql, [nama, email, password], (err, result) => {
      if (err) return res.status(500).json({ error: "Gagal mendaftarkan pengguna" });

      return res.status(201).json({ message: "Pendaftaran berhasil" });
    });
  });
};
