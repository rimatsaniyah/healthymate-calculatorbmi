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
        <h4>1. Nasi Merah Ayam Panggang</h4>
        <ul>
            <li>100 gr nasi merah</li>
            <li>1 potong dada ayam tanpa kulit</li>
            <li>Bumbu: bawang putih, kecap, lada hitam</li>
            <li>Sayuran rebus (wortel, buncis, brokoli)</li>
        </ul>
        <p>➡️ Panggang ayam yang sudah dibumbui. Sajikan dengan nasi merah dan sayur rebus.</p>
        </div>
    </div>
  );
};

export default ResepNormal;
