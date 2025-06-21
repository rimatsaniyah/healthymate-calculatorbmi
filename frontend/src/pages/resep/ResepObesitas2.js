import React from "react";
import { useNavigate } from "react-router-dom";
import "../../css/Resep.css";
import backgroundImage from "../../assets/foto3.png";

const ResepObesitas2 = () => {
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
      <button className="back-button" onClick={() => navigate("/resep")}>
        ← Kembali
      </button>

      <div className="resep-box">
        <h2>🍱 Resep untuk Obesitas II</h2>
        <p className="intro">
          💡 <em>Utamakan makanan sederhana, rendah kalori, tinggi serat, dan mudah dicerna.</em>
        </p>
        <hr />

        <p><strong>BMI ≥ 35</strong></p>
        <p>🔴 <strong>Tujuan:</strong> Menurunkan berat badan dan mengurangi risiko penyakit kronis.</p>

        <p>🥣 <strong>Bubur Oatmeal + Sayur Kukus</strong></p>
        <p>Bahan:</p>
        <p>- Oat, wortel kukus, brokoli, kacang panjang, sedikit garam</p>
        <p>💡 Sangat mengenyangkan, kaya serat dan mudah dicerna.</p>

        <p>🥗 <strong>Salad Tahu Kukus</strong></p>
        <p>Bahan:</p>
        <p>- Tahu putih kukus, selada, tomat, mentimun, saus rendah kalori</p>
        <p>💡 Ringan, rendah lemak, dan cocok untuk makan malam.</p>

        <p className="note">
          ✨ <strong>Catatan:</strong> Konsultasikan dengan ahli gizi untuk pengaturan pola makan. Hindari makanan olahan dan gorengan.
        </p>
      </div>
    </div>
  );
};

export default ResepObesitas2;
