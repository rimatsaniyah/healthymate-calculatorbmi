import React from "react";
import { useNavigate } from "react-router-dom";
import "../../css/Jadwal.css";
import backgroundImage from "../../assets/foto3.png";

const JadwalNormal = () => {
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
      <button className="back-button" onClick={() => navigate("/jadwal")}>← Kembali</button>

      <div className="jadwal-box">
        <h2>📅 Jadwal Diet - Berat Badan Normal</h2>
        <p><strong>BMI 18.5 - 24.9</strong></p>
        <p>🎯 <strong>Tujuan:</strong> Menjaga kestabilan berat badan dan energi harian.</p>
        <ul>
          <li><strong>Pagi (07.00 - 08.00):</strong> Oatmeal + pisang, teh tanpa gula / air hangat</li>
          <li><strong>Snack (10.00):</strong> Buah potong (pepaya/apel)</li>
          <li><strong>Siang (12.00 - 13.00):</strong> Nasi merah + ayam rebus/panggang + sayur, air putih 2 gelas</li>
          <li><strong>Sore (16.00 - 17.00):</strong> Roti gandum + selai kacang / susu rendah lemak</li>
          <li><strong>Malam (19.00 - 20.00):</strong> Tumis tahu + sayur + ½ porsi nasi, buah (jeruk/pir)</li>
        </ul>
        <p className="note">✨ <strong>Catatan:</strong> Pertahankan gaya hidup sehat untuk menjaga kebugaran dan mencegah penyakit di masa depan. 🌿💪</p>
      </div>
    </div>
  );
};

export default JadwalNormal;
