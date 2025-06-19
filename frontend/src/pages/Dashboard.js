// src/pages/Dashboard.js

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Dashboard.css";
import backgroundImage from "../assets/foto4.png";

const Dashboard = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.username) {
      setUsername(user.username);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
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
      }}
    >
      <div className="dashboard-box">
        <h2>Selamat datang, {username}!</h2>
        <p>Pilih fitur yang ingin digunakan:</p>

        <div className="features">
          <button onClick={() => navigate("/bmi")}>🧮 Kalkulator BMI</button>
          <button onClick={() => navigate("/tips")}>📋 Tips Hidup Sehat</button>
          <button onClick={() => navigate("/jadwal")}>📅 Jadwal Diet</button>
          <button onClick={() => navigate("/resep")}>🍲 Rekomendasi Resep</button>
          <button onClick={handleLogout}>🚪 Logout</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
