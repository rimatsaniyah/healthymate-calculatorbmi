const db = require("../config/db");

exports.login = (req, res) => {
  const { email, password } = req.body;

  const sql = "SELECT * FROM users WHERE email = ? AND password = ?";
  db.query(sql, [email, password], (err, results) => {
    if (err) return res.status(500).json({ error: "Server error" });

    if (results.length === 0) {
      return res.status(401).json({ error: "Email atau password salah" });
    }

    return res.status(200).json({
      message: "Login berhasil",
      user: results[0],
    });
  });
};
