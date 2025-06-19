import React from "react";
import { useNavigate } from "react-router-dom";
import "../../css/Jadwal.css";
import backgroundImage from "../../assets/foto3.png"; // Pastikan path benar

const JadwalObesitas1 = () => {
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
        <h2>Jadwal Diet - Obesitas Tingkat I</h2>
        <ul>
            <li><strong>Pagi:</strong> Telur rebus, roti gandum, teh tanpa gula</li>
            <li><strong>Snack:</strong> Buah segar (pepaya/melon)</li>
            <li><strong>Siang:</strong> Nasi merah sedikit, dada ayam kukus, sayur rebus</li>
            <li><strong>Snack sore:</strong> Kacang almond / edamame rebus</li>
            <li><strong>Malam:</strong> Salad sayur + tahu rebus, infused water</li>
        </ul>
        </div>
    </div>
  );
};

export default JadwalObesitas1;
