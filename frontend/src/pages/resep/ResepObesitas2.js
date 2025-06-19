import React from "react";
import { useNavigate } from "react-router-dom";
import "../../css/Resep.css";
import backgroundImage from "../../assets/foto3.png";

const ResepObesitas2 = () => {
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
        <h2>🍵 Resep untuk Obesitas Tingkat II</h2>
        <h4>1. Jus Hijau Detox</h4>
        <ul>
            <li>1/2 mentimun</li>
            <li>1 genggam bayam</li>
            <li>1 buah apel hijau</li>
            <li>Air perasan lemon</li>
        </ul>
        <p>➡️ Blender semua bahan hingga halus. Saring bila perlu. Sajikan tanpa gula.</p>
        </div>
    </div>
  );
};

export default ResepObesitas2;
