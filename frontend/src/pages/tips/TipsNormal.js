import React from "react";
import { useNavigate } from "react-router-dom";
import "../../css/Tips.css";
import backgroundImage from "../../assets/foto3.png";

const TipsNormal = () => {
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
      <button className="back-button" onClick={() => navigate("/tips")}>
        ← Kembali
      </button>

      <div className="tips-box">
        <h2>📋 Tips Hidup Sehat</h2>
        <p className="intro">
          💡 <em>Pahami tubuhmu, sayangi dirimu. Setiap kategori BMI punya pendekatan sehat yang berbeda!</em>
        </p>

        <hr />

        <p><strong>BMI 18.5 – 24.9</strong></p>

        <p>🟢 <strong>Tujuan utama:</strong> Menjaga berat badan ideal dan kesehatan secara keseluruhan.</p>

        <p>✅ <strong>Tips Sehat:</strong></p>
          <p>🥗 Konsumsi makanan bergizi seimbang </p>
            <p>(karbohidrat kompleks, protein tanpa lemak, sayur, buah).</p>
          <p>🚶‍♀️ Aktif bergerak minimal 30 menit setiap hari </p>
            <p>(jalan kaki, yoga, bersepeda).</p>
          <p>💤 Tidur cukup 7–9 jam per malam untuk pemulihan tubuh.</p>
          <p>🚰 Minum air putih minimal 8 gelas sehari.</p>
          <p>😊 Kelola stres dengan hobi atau meditasi.</p>

        <p className="note">
          ✨ <strong>Catatan:</strong> Pertahankan gaya hidup sehat untuk menjaga kebugaran dan mencegah penyakit di masa depan. 🌿💪
        </p>
      </div>
    </div>
  );
};

export default TipsNormal;
