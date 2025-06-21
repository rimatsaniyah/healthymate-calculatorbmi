import React from "react";
import { useNavigate } from "react-router-dom";
import "../../css/Tips.css";
import backgroundImage from "../../assets/foto3.png";

const TipsObesitasII = () => {
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

        <p><strong>BMI ≥ 35.0</strong></p>

        <p>🔴 <strong>Tujuan utama:</strong> Mencegah komplikasi serius dan meningkatkan kualitas hidup.</p>

        <p>✅ <strong>Tips Sehat:</strong></p>
          <p>🥗 Ganti makanan olahan dengan makanan segar alami.</p>
          <p>🍽 Gunakan piring kecil dan makan perlahan untuk kontrol porsi.</p>
          <p>🚶‍♂️ Mulai dengan olahraga ringan dan bertahap tingkatkan intensitas.</p>
          <p>🧘 Latihan relaksasi untuk mengelola stres yang memicu makan emosional.</p>
          <p>👨‍⚕️ Dapatkan dukungan dari dokter dan komunitas sehat.</p>

        <p className="note">
          ✨ <strong>Catatan:</strong> Kamu mampu berubah, sedikit demi sedikit. Tidak ada kata terlambat untuk jadi sehat. Semangat! 🌈💖
        </p>
      </div>
    </div>
  );
};

export default TipsObesitasII;
