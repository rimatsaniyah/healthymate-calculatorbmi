// src/pages/Dashboard.js

import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/Dashboard.css";
import backgroundImage from "../assets/foto4.png";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div
      className="dashboard-page"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        padding: "40px",
        color: "#fff"
      }}
    >
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
