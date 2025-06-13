// src/pages/Dashboard.js

import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/Dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Hapus token jika ada (opsional)
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="dashboard-page">
      <div className="dashboard-box">
        <h2>Selamat Datang di Healthy Mate! 🎉</h2>
        <p>Silakan pilih fitur yang ingin kamu gunakan:</p>

        <div className="features">
          <button onClick={() => navigate("/kalori")}>🧮 Kalkulator Kalori</button>
          <button onClick={() => navigate("/tips")}>📋 Tips Hidup Sehat</button>
          <button onClick={() => navigate("/jadwal")}>📅 Jadwal Diet Harian</button>
          <button onClick={() => navigate("/resep")}>🍲 Rekomendasi Resep</button>
          <button onClick={handleLogout}>🚪 Logout</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
