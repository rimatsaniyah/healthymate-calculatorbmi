import React from "react";
import { useNavigate } from "react-router-dom";
import "../../css/Jadwal.css";
import backgroundImage from "../../assets/foto3.png"; // Pastikan path benar

const JadwalObesitas2 = () => {
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
        <h2>Jadwal Diet - Obesitas Tingkat II</h2>
        <ul>
            <li><strong>Pagi:</strong> Smoothie sayur (bayam, timun), 1 telur rebus</li>
            <li><strong>Snack:</strong> Air lemon hangat + buah potong</li>
            <li><strong>Siang:</strong> Nasi merah 1 sendok, ayam rebus, brokoli kukus</li>
            <li><strong>Snack sore:</strong> Salad buah tanpa saus manis</li>
            <li><strong>Malam:</strong> Sup sayur bening, teh chamomile</li>
        </ul>
        </div>
    </div>
  );
};

export default JadwalObesitas2;
