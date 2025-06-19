import React from "react";
import { useNavigate } from "react-router-dom";
import "../../css/Resep.css";
import backgroundImage from "../../assets/foto3.png"; // ✅ perbaikan path

const Resep = () => {
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

      <div className="resep-box">
        <h2>🍽️ Rekomendasi Resep Sesuai Kategori BMI</h2>
        <div className="resep-buttons">
          <button onClick={() => navigate("/resep/underweight")}>
            Resep untuk Berat Badan Sangat Kurang
          </button>
          <button onClick={() => navigate("/resep/normal")}>
            Resep untuk Berat Badan Normal
          </button>
          <button onClick={() => navigate("/resep/overweight")}>
            Resep untuk Berat Badan Berlebih
          </button>
          <button onClick={() => navigate("/resep/obesitas1")}>
            Resep untuk Obesitas I
          </button>
          <button onClick={() => navigate("/resep/obesitas2")}>
            Resep untuk Obesitas II
          </button>
        </div>
      </div>
    </div>
  );
};

export default Resep;
