import React from "react";
import { useNavigate } from "react-router-dom";
import "../../css/Jadwal.css";
import backgroundImage from "../../assets/foto3.png"; // Pastikan path benar

const JadwalUnderweight = () => {
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
      <button className="back-button" onClick={() => navigate("/jadwal")}>
        ← Kembali
      </button>

        <div className="jadwal-box">
        <h2>Jadwal Diet - Berat Badan Sangat Kurang</h2>
        <ul>
            <li><strong>Pagi:</strong> Nasi, telur, susu full cream, buah pisang</li>
            <li><strong>Snack:</strong> Roti gandum + selai kacang</li>
            <li><strong>Siang:</strong> Nasi, ayam panggang, sayur bayam, jus alpukat</li>
            <li><strong>Snack sore:</strong> Kacang almond & kurma</li>
            <li><strong>Malam:</strong> Nasi, ikan, sup, susu hangat</li>
        </ul>
        </div>
    </div>
  );
};

export default JadwalUnderweight;
