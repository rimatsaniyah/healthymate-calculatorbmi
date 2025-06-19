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
        <h2>🥗 Resep untuk Berat Badan Berlebih</h2>
        <h4>1. Salad Ayam Panggang</h4>
        <ul>
            <li>1 potong ayam panggang tanpa kulit, iris tipis</li>
            <li>Selada, tomat, timun, jagung rebus</li>
            <li>Dressing: perasan lemon + sedikit minyak zaitun</li>
        </ul>
        <p>➡️ Campur semua bahan dan siram dengan dressing. Nikmati saat dingin.</p>
        </div>
    </div>
  );
};

export default ResepOverweight;
