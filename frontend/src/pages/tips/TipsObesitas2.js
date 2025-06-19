import React from "react";
import { useNavigate } from "react-router-dom";
import "../../css/Tips.css";
import backgroundImage from "../../assets/foto3.png";

const TipsObesitas2 = () => {
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
        <h2>Tips untuk Obesitas Tingkat II</h2>
        <ul>
            <li>Penting untuk berkonsultasi dengan tenaga medis atau ahli gizi secara rutin.</li>
            <li>Ikuti program penurunan berat badan yang terstruktur dan diawasi.</li>
            <li>Konsumsi makanan dengan gizi seimbang, rendah kalori, tinggi serat.</li>
            <li>Lakukan aktivitas fisik ringan yang tidak membebani sendi (berenang, yoga).</li>
            <li>Perhatikan kesehatan mental, hindari stress eating.</li>
        </ul>
        </div>
    </div>
  );
};

export default TipsObesitas2;
