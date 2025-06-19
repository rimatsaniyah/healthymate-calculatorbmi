import React from "react";
import { useNavigate } from "react-router-dom";
import "../../css/Jadwal.css";
import backgroundImage from "../../assets/foto3.png"; // Pastikan path benar

const JadwalOverweight = () => {
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
        <h2>Jadwal Diet - Berat Badan Berlebih</h2>
        <ul>
            <li><strong>Pagi:</strong> Smoothie buah tanpa gula, roti gandum</li>
            <li><strong>Snack:</strong> Wortel rebus atau buah pir</li>
            <li><strong>Siang:</strong> Nasi merah, ikan bakar, lalapan</li>
            <li><strong>Snack sore:</strong> Kacang rebus</li>
            <li><strong>Malam:</strong> Sup bening, dada ayam, air lemon hangat</li>
        </ul>
        </div>
    </div>
  );
};

export default JadwalOverweight;
