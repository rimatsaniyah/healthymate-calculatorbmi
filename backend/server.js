const express = require("express");
const cors = require("cors");
const app = express();
const db = require("./config/db");
require("dotenv").config();

app.use(cors());
app.use(express.json());

// Import routes
const bmiRoutes = require("./routes/bmi");
const authRoutes = require("./routes/authRoutes"); // ✅ Auth route

// Gunakan routes
app.use("/api/bmi", bmiRoutes);
app.use("/api", authRoutes); // ✅ route /api/login dan /api/register

// Jalankan server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server berjalan di http://localhost:${PORT}`);
});
