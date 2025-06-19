import React from "react";
import { useNavigate } from "react-router-dom";
import "../../css/Jadwal.css";
import backgroundImage from "../../assets/foto3.png"; // Pastikan path benar

const JadwalNormal = () => {
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
        <h2>Jadwal Diet - Berat Badan Normal</h2>
        <ul>
            <li><strong>Pagi:</strong> Oatmeal, buah, teh hijau</li>
            <li><strong>Snack:</strong> Yogurt rendah lemak</li>
            <li><strong>Siang:</strong> Nasi merah, dada ayam, sayur kukus</li>
            <li><strong>Snack sore:</strong> Buah apel / jeruk</li>
            <li><strong>Malam:</strong> Sup sayur, tahu/tempe, air putih</li>
        </ul>
        </div>
    </div>
  );
};

export default JadwalNormal;
