const express = require("express");
const cors = require("cors");
const app = express();

const authRoutes = require("./routes/authRoutes");
const bmiRoutes = require("./routes/bmi");

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/bmi-history", bmiRoutes);

app.use((req, res) => {
  res.status(404).json({ message: "Endpoint tidak ditemukan" });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`✅ Server backend berjalan di http://localhost:${PORT}`);
});
