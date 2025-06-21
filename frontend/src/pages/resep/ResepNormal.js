import React from "react";
import { useNavigate } from "react-router-dom";
import "../../css/Resep.css";
import backgroundImage from "../../assets/foto3.png";

const ResepNormal = () => {
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
        <h2>🍱 Resep untuk Berat Badan Normal</h2>
        <p className="intro">
          💡 <em>Pahami tubuhmu, sayangi dirimu. Setiap kategori BMI punya pendekatan sehat yang berbeda!</em>
        </p>

        <hr />

        <p><strong>BMI 18.5 – 24.9</strong></p>

        <p>🟢 <strong>Tujuan utama:</strong> Menjaga berat badan ideal dan kesehatan secara keseluruhan.</p>

        <p>✅ <strong>Rekomendasi Resep Sehat:</strong></p>

        <p>🥗 <strong>Salad Ayam Panggang</strong></p>
        <p><u>Bahan:</u></p>
        <p>• Dada ayam panggang</p>
        <p>• Selada, tomat, timun, jagung rebus</p>
        <p>• Dressing: minyak zaitun & jeruk nipis</p>
        <p>💡 Rendah lemak, tinggi serat & protein, cocok untuk diet seimbang.</p>

        <br />

        <p>🍚 <strong>Nasi Merah + Tahu Lada Hitam</strong></p>
        <p><u>Bahan:</u></p>
        <p>• Nasi merah</p>
        <p>• Tahu panggang dengan bumbu lada hitam</p>
        <p>• Sayur kukus (brokoli, wortel)</p>
        <p>💡 Serat dan protein nabati yang mendukung metabolisme tubuh.</p>

        <br />

        <p className="note">
          ✨ <strong>Catatan:</strong> Pertahankan pola makan seimbang & gaya hidup aktif untuk menjaga kebugaran dan mencegah penyakit di masa depan. 🌿💪
        </p>
      </div>
    </div>
  );
};

export default ResepNormal;
