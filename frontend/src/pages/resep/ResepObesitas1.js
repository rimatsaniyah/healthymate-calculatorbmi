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
        <h2>🥦 Resep untuk Obesitas Tingkat I</h2>
        <h4>1. Sup Sayur Rendah Kalori</h4>
        <ul>
            <li>Wortel, brokoli, sawi putih, buncis</li>
            <li>Bumbu: bawang putih, merica, sedikit garam</li>
            <li>1 sdm minyak zaitun</li>
        </ul>
        <p>➡️ Tumis bumbu dengan minyak zaitun, lalu rebus sayur hingga matang. Sajikan hangat.</p>
        </div>
    </div>
  );
};

export default ResepObesitas1;
