import React from "react";
import { useNavigate } from "react-router-dom";
import "../../css/Tips.css";
import backgroundImage from "../../assets/foto3.png"; // ✅ perbaikan path

const Tips = () => {
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

      <div className="tips-box">
        <h2>📋 Tips Hidup Sehat</h2>
        <p style={{ textAlign: "center", marginTop: "20px", color: "#black" }}>Berdasarkan Kategori BMI</p>
        <div className="tips-buttons">
          <button onClick={() => navigate("/tips/underweight")}>
            Tips untuk Berat Badan Sangat Kurang
          </button>
          <button onClick={() => navigate("/tips/normal")}>
            Tips untuk Berat Badan Normal
          </button>
          <button onClick={() => navigate("/tips/overweight")}>
            Tips untuk Berat Badan Berlebih
          </button>
          <button onClick={() => navigate("/tips/obesitas1")}>
            Tips untuk Obesitas I
          </button>
          <button onClick={() => navigate("/tips/obesitas2")}>
            Tips untuk Obesitas II
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tips;
