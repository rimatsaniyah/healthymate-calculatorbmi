import React from "react";
import { useNavigate } from "react-router-dom";
import "../../css/Tips.css";
import backgroundImage from "../../assets/foto3.png";

const TipsObesitas1 = () => {
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
        <h2>Tips untuk Obesitas Tingkat I</h2>
        <ul>
            <li>Mulai dengan memperbaiki pola makan: lebih banyak sayur dan protein rendah lemak.</li>
            <li>Kurangi porsi makan dan hindari camilan manis/berlemak.</li>
            <li>Lakukan olahraga ringan secara konsisten (30 menit/hari).</li>
            <li>Tingkatkan konsumsi air putih dan tidur cukup.</li>
            <li>Hindari minuman manis dan makanan cepat saji.</li>
        </ul>
        </div>
    </div>
  );
};

export default TipsObesitas1;
