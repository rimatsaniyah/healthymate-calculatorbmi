// server.js

const express = require("express");
const cors = require("cors");
const app = express();
const authRoutes = require("./routes/authRoutes");

// Middleware
app.use(cors()); // Izinkan request dari frontend
app.use(express.json()); // Parse body JSON

// Gunakan routes
app.use("/api", authRoutes);

// Jalankan server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server backend berjalan di http://localhost:${PORT}`);
});
