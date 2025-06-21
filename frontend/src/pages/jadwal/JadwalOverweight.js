import React from "react";
import { useNavigate } from "react-router-dom";
import "../../css/Jadwal.css";
import backgroundImage from "../../assets/foto3.png";

const JadwalOverweight = () => {
  const navigate = useNavigate();

  return (
    <div className="tips-page" style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      minHeight: "100vh",
      padding: "40px 20px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontFamily: "Segoe UI, sans-serif"
    }}>
      <button className="back-button" onClick={() => navigate("/jadwal")}>← Kembali</button>
      <div className="jadwal-box">
        <h2>📅 Jadwal Diet - Berat Badan Berlebih</h2>
        <p><strong>BMI 25 - 29.9</strong></p>
        <p>🎯 <strong>Tujuan:</strong> Menurunkan berat badan secara perlahan dan sehat.</p>
        <ul>
          <li><strong>Pagi:</strong> Oat + irisan apel, air lemon hangat</li>
          <li><strong>Snack:</strong> Kacang almond atau buah potong</li>
          <li><strong>Siang:</strong> Nasi merah + dada ayam rebus + sayur bening</li>
          <li><strong>Sore:</strong> Salad sayur + telur rebus</li>
          <li><strong>Malam:</strong> Sup bening + tahu / tempe + buah rendah gula</li>
        </ul>
        <p className="note">✨ <strong>Catatan:</strong> Perbanyak sayur dan serat, hindari gorengan. 🌿</p>
      </div>
    </div>
  );
};

export default JadwalOverweight;
