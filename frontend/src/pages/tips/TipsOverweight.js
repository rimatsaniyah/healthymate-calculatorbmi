import React from "react";
import { useNavigate } from "react-router-dom";
import "../../css/Tips.css";
import backgroundImage from "../../assets/foto3.png";

const TipsOverweight = () => {
    const navigate = useNavigate(); // ✅ definisikan navigate

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
        <h2>Tips untuk Berat Badan Berlebih</h2>
        <ul>
            <li>Kurangi asupan kalori secara bertahap, hindari diet ekstrem.</li>
            <li>Fokus pada makanan tinggi serat: sayur, buah, gandum utuh.</li>
            <li>Batasi konsumsi gula, makanan berlemak dan gorengan.</li>
            <li>Lakukan aktivitas fisik teratur, seperti jalan cepat, bersepeda, atau berenang.</li>
            <li>Konsultasikan ke dokter atau ahli gizi untuk panduan diet sehat.</li>
        </ul>
        </div>
    </div>
  );
};

export default TipsOverweight;
