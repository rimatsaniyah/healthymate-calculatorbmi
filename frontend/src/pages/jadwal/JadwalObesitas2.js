import React from "react";
import { useNavigate } from "react-router-dom";
import "../../css/Jadwal.css";
import backgroundImage from "../../assets/foto3.png";

const JadwalObesitas2 = () => {
  const navigate = useNavigate();

  return (
    <div className="tips-page" style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      minHeight: "100vh",
      padding: "40px 20px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontFamily: "Segoe UI, sans-serif"
    }}>
      <button className="back-button" onClick={() => navigate("/jadwal")}>← Kembali</button>
      <div className="jadwal-box">
        <h2>📅 Jadwal Diet - Obesitas II</h2>
        <p><strong>BMI ≥ 35</strong></p>
        <p>🎯 <strong>Tujuan:</strong> Menurunkan berat badan untuk mencegah risiko penyakit serius.</p>
        <ul>
          <li><strong>Pagi:</strong> Oatmeal + irisan buah + air lemon</li>
          <li><strong>Snack:</strong> Wortel kukus / kacang rebus</li>
          <li><strong>Siang:</strong> Nasi merah sedikit + sup sayur + dada ayam kukus</li>
          <li><strong>Sore:</strong> Teh hijau tanpa gula + buah</li>
          <li><strong>Malam:</strong> Tumis brokoli + tahu + air putih hangat</li>
        </ul>
        <p className="note">✨ <strong>Catatan:</strong> Perbanyak gerak ringan & kurangi kalori harian secara konsisten. ❤️‍🔥</p>
      </div>
    </div>
  );
};

export default JadwalObesitas2;
