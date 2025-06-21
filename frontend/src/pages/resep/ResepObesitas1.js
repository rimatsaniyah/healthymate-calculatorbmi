import React from "react";
import { useNavigate } from "react-router-dom";
import "../../css/Resep.css";
import backgroundImage from "../../assets/foto3.png";

const ResepObesitas1 = () => {
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
        <h2>🍱 Resep untuk Obesitas I</h2>
        <p className="intro">
          💡 <em>Fokus pada makanan rendah kalori, tinggi serat, dan tetap bernutrisi.</em>
        </p>
        <hr />

        <p><strong>BMI 30 – 34.9</strong></p>
        <p>🔴 <strong>Tujuan:</strong> Menurunkan berat badan secara konsisten dan mencegah komplikasi kesehatan.</p>

        <p>🥬 <strong>Sup Bening Sayur + Telur Rebus</strong></p>
        <p>Bahan:</p>
        <p>- Bayam, wortel, jagung muda, bawang putih</p>
        <p>- Telur rebus sebagai pelengkap protein</p>
        <p>💡 Rendah kalori, tinggi vitamin dan mineral.</p>

        <p>🍚 <strong>Nasi Merah + Pepes Ikan</strong></p>
        <p>Bahan:</p>
        <p>- Nasi merah, ikan kembung dibumbui dan dikukus</p>
        <p>💡 Lemak sehat dan rendah kolesterol.</p>

        <p className="note">
          ✨ <strong>Catatan:</strong> Perhatikan kontrol porsi. Kurangi garam dan perbanyak konsumsi sayur segar.
        </p>
      </div>
    </div>
  );
};

export default ResepObesitas1;
