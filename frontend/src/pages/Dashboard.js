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
        padding: "40px"
      }}
    >
      <div className="dashboard-box">
        <h2>Healthy Mate!</h2>
        <h3>Teman Diet dan Olahraga-mu</h3>
        <p>Silakan pilih fitur yang ingin kamu gunakan:</p>

        <div className="features">
          <button onClick={() => navigate("/bmi")}>🧮 Kalkulator BMI</button>
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
