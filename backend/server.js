const express = require("express");
const cors = require("cors");
const app = express(); // <- HARUS DIDEFINISIKAN SEBELUM DIGUNAKAN

const authRoutes = require("./routes/authRoutes");

// Middleware
app.use(cors());
app.use(express.json());

// Routing
app.use("/api", authRoutes);

// Jalankan server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
