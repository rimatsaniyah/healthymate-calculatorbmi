import React from "react";
import { useNavigate } from "react-router-dom";
import "../../css/Jadwal.css";
import backgroundImage from "../../assets/foto3.png"; // Pastikan path benar

const Jadwal = () => {
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
      <button className="back-button" onClick={() => navigate("/dashboard")}>
        ← Kembali
      </button>

      <div className="jadwal-box">
        <h2>📅 Jadwal Diet Sesuai Kategori BMI</h2>
        <div className="jadwal-buttons">
          <button onClick={() => navigate("/jadwal/underweight")}>
            Jadwal Diet untuk Berat Badan Sangat Kurang
          </button>
          <button onClick={() => navigate("/jadwal/normal")}>
            Jadwal Diet untuk Berat Badan Normal
          </button>
          <button onClick={() => navigate("/jadwal/overweight")}>
            Jadwal Diet untuk Berat Badan Berlebih
          </button>
          <button onClick={() => navigate("/jadwal/obesitas1")}>
            Jadwal Diet untuk Obesitas I
          </button>
          <button onClick={() => navigate("/jadwal/obesitas2")}>
            Jadwal Diet untuk Obesitas II
          </button>
        </div>
      </div>
    </div>
  );
};

export default Jadwal;
