import React from "react";
import { useNavigate } from "react-router-dom";
import "../../css/Tips.css";
import backgroundImage from "../../assets/foto3.png";

const TipsUnderweight = () => {
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
        <h2>Tips untuk Berat Badan Sangat Kurang</h2>
        <ul>
            <li>Konsumsi makanan tinggi kalori sehat: alpukat, kacang-kacangan, susu full cream.</li>
            <li>Perbanyak asupan protein hewani dan nabati.</li>
            <li>Makan lebih sering, 5-6 kali sehari dalam porsi kecil hingga sedang.</li>
            <li>Minum susu penambah berat badan (gainer) jika perlu.</li>
            <li>Olahraga ringan seperti yoga dan jalan santai untuk meningkatkan nafsu makan.</li>
        </ul>
        </div>
    </div>
  );
};

export default TipsUnderweight;
