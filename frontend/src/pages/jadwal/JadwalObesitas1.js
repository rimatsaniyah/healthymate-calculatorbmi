import React from "react";
import { useNavigate } from "react-router-dom";
import "../../css/Jadwal.css";
import backgroundImage from "../../assets/foto3.png";

const JadwalObesitas1 = () => {
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
        <h2>📅 Jadwal Diet - Obesitas I</h2>
        <p><strong>BMI 30 - 34.9</strong></p>
        <p>🎯 <strong>Tujuan:</strong> Menurunkan berat badan secara konsisten dan mencegah komplikasi.</p>
        <ul>
          <li><strong>Pagi:</strong> Telur rebus + roti gandum + air lemon</li>
          <li><strong>Snack:</strong> Buah segar (apel/pear)</li>
          <li><strong>Siang:</strong> Sup sayur + tempe kukus + nasi merah sedikit</li>
          <li><strong>Sore:</strong> Yogurt rendah lemak + biji chia</li>
          <li><strong>Malam:</strong> Tumis sayur + tahu / tempe, buah semangka</li>
        </ul>
        <p className="note">✨ <strong>Catatan:</strong> Lakukan olahraga ringan minimal 3x seminggu. 🏃‍♂️</p>
      </div>
    </div>
  );
};

export default JadwalObesitas1;
