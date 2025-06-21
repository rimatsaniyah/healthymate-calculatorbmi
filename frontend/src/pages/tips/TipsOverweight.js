import React from "react";
import { useNavigate } from "react-router-dom";
import "../../css/Tips.css";
import backgroundImage from "../../assets/foto3.png";

const TipsOverweight = () => {
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

        <p><strong>BMI 25.0 – 29.9</strong></p>

        <p>🟠 <strong>Tujuan utama:</strong> Menurunkan berat badan secara bertahap dan mencegah obesitas.</p>

        <p>✅ <strong>Tips Sehat:</strong></p>
          <p>🥦 Perbanyak konsumsi sayuran, buah rendah gula, dan protein tanpa lemak.</p>
          <p>🍞 Kurangi karbohidrat olahan seperti roti putih dan mie instan.</p>
          <p>🕐 Terapkan pola makan teratur dan hindari ngemil berlebihan.</p>
          <p>🏃‍♂️ Lakukan olahraga kardio 3–5 kali seminggu (jogging, zumba).</p>
          <p>🧠 Tetapkan tujuan realistis dan pantau progres secara berkala.</p>

        <p className="note">
          ✨ <strong>Catatan:</strong> Perubahan kecil yang konsisten lebih baik daripada diet ekstrem. 💪🍀
        </p>
      </div>
    </div>
  );
};

export default TipsOverweight;
