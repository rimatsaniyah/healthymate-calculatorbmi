import React from "react";
import { useNavigate } from "react-router-dom";
import "../../css/Tips.css";
import backgroundImage from "../../assets/foto3.png";

const TipsNormal = () => {
  const navigate = useNavigate(); // ✅ definisikan navigate

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
      <button className="back-button" onClick={() => navigate("/tips")}>
        ← Kembali
      </button>

      <div className="tips-box">
        <h2>Tips untuk Berat Badan Normal</h2>
        <ul>
          <li>Pertahankan pola makan seimbang: karbohidrat, protein, lemak baik, serat, vitamin.</li>
          <li>Minum air putih minimal 8 gelas sehari.</li>
          <li>Rutin berolahraga minimal 30 menit setiap hari.</li>
          <li>Hindari makanan cepat saji dan tinggi gula berlebihan.</li>
          <li>Perhatikan kualitas tidur dan manajemen stres.</li>
        </ul>
      </div>
    </div>
  );
};

export default TipsNormal;
