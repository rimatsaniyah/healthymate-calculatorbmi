import React from "react";
import { useNavigate } from "react-router-dom";
import "../../css/Tips.css";
import backgroundImage from "../../assets/foto3.png";

const TipsObesitasI = () => {
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

        <p><strong>BMI 30.0 – 34.9</strong></p>

        <p>🔴 <strong>Tujuan utama:</strong> Menurunkan berat badan secara sehat dan mencegah komplikasi.</p>

        <p>✅ <strong>Tips Sehat:</strong></p>
          <p>🍽 Kurangi porsi dan perhatikan kualitas makanan.</p>
          <p>🥗 Fokus pada sayur, buah, dan protein rendah lemak.</p>
          <p>🚫 Hindari makanan cepat saji dan minuman manis.</p>
          <p>🧘 Olahraga ringan seperti jalan cepat atau senam low impact.</p>
          <p>👩‍⚕️ Konsultasi dengan ahli gizi atau dokter untuk pendampingan.</p>

        <p className="note">
          ✨ <strong>Catatan:</strong> Setiap langkah kecil adalah kemajuan. Kamu berharga dan pantas untuk sehat! ❤️🏃‍♀️
        </p>
      </div>
    </div>
  );
};

export default TipsObesitasI;
