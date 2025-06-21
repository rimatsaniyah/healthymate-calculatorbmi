import React from "react";
import { useNavigate } from "react-router-dom";
import "../../css/Jadwal.css";
import backgroundImage from "../../assets/foto3.png";

const JadwalUnderweight = () => {
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
        <h2>📅 Jadwal Diet - Berat Badan Sangat Kurang</h2>
        <p><strong>BMI &lt; 18.5</strong></p>
        <p>🎯 <strong>Tujuan:</strong> Meningkatkan berat badan secara sehat.</p>
        <ul>
          <li><strong>Pagi:</strong> Roti gandum + telur orak-arik + susu full cream</li>
          <li><strong>Snack:</strong> Alpukat + kacang panggang</li>
          <li><strong>Siang:</strong> Nasi putih + ayam + tempe + sayur, jus mangga</li>
          <li><strong>Sore:</strong> Smoothie pisang + yogurt</li>
          <li><strong>Malam:</strong> Ikan goreng + nasi + sup sayur + buah potong</li>
        </ul>
        <p className="note">✨ <strong>Catatan:</strong> Perhatikan asupan kalori dan jangan lewatkan makan. 💪</p>
      </div>
    </div>
  );
};

export default JadwalUnderweight;
