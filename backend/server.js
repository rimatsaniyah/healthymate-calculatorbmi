const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");

const app = express();

// Middleware untuk mengizinkan request dari frontend (misalnya React/Vue)
app.use(cors());

// Middleware untuk parsing request body dalam format JSON
app.use(express.json());

// Gunakan route untuk autentikasi di bawah prefix /api
// Contoh endpoint: POST http://localhost:5000/api/login
app.use("/api", authRoutes);

// Jalankan server di port 5000
app.listen(5000, () => {
  console.log("✅ Server running on http://localhost:5000");
});
