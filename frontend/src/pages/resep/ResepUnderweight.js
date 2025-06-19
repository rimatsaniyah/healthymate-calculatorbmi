import React from "react";
import { useNavigate } from "react-router-dom";
import "../../css/Resep.css";
import backgroundImage from "../../assets/foto3.png";

const ResepUnderweight = () => {
    const navigate = useNavigate();
    
  return (
    <div
      className="tips-page"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        padding: "40px 20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Segoe UI, sans-serif",
      }}
    >
      <button className="back-button" onClick={() => navigate("/resep")}>
        ← Kembali
      </button>

        <div className="resep-box">
        <h2>🍛 Resep untuk Berat Badan Sangat Kurang</h2>
        <h4>1. Smoothie Pisang Alpukat</h4>
        <ul>
            <li>1 buah pisang matang</li>
            <li>1/2 buah alpukat</li>
            <li>200 ml susu full cream</li>
            <li>1 sdm madu</li>
        </ul>
        <p>➡️ Blender semua bahan hingga halus. Sajikan dingin.</p>
        </div>
    </div>
  );
};

export default ResepUnderweight;
