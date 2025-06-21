import React from "react";
import { useNavigate } from "react-router-dom";
import "../../css/Resep.css";
import backgroundImage from "../../assets/foto3.png";

const ResepOverweight = () => {
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
        <h2>🍱 Resep untuk Berat Badan Berlebih</h2>
        <p className="intro">
          💡 <em>Pilih makanan yang rendah kalori namun tetap mengenyangkan untuk membantu penurunan berat badan.</em>
        </p>
        <hr />

        <p><strong>BMI 25 – 29.9</strong></p>
        <p>🟠 <strong>Tujuan:</strong> Mengurangi berat badan dengan pola makan sehat dan aktif bergerak.</p>

        <p>🥗 <strong>Tumis Sayur Tofu</strong></p>
        <p>Bahan:</p>
        <p>- Tahu putih, brokoli, wortel, bawang putih</p>
        <p>- Minyak zaitun secukupnya</p>
        <p>💡 Kaya serat, rendah lemak, mengenyangkan.</p>

        <p>🍜 <strong>Sop Ayam Sayuran</strong></p>
        <p>Bahan:</p>
        <p>- Dada ayam rebus, wortel, buncis, kentang, bawang putih, merica</p>
        <p>💡 Menghangatkan tubuh, rendah kalori, cocok untuk makan malam.</p>

        <p className="note">
          ✨ <strong>Catatan:</strong> Hindari makanan tinggi gula, gorengan, dan minuman manis. Perbanyak air putih dan perhatikan porsi makan.
        </p>
      </div>
    </div>
  );
};

export default ResepOverweight;
