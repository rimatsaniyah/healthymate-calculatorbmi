import React from "react";
import { useNavigate } from "react-router-dom";
import "../../css/Resep.css";
import backgroundImage from "../../assets/foto3.png";

const ResepUnderweight = () => {
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
      fontFamily: "Segoe UI, sans-serif",
    }}>
      <button className="back-button" onClick={() => navigate("/resep")}>← Kembali</button>

      <div className="resep-box">
        <h2>🍱 Resep untuk Berat Badan Sangat Kurang</h2>
        <p className="intro">
          💡 <em>Penuhi kebutuhan nutrisi untuk menambah berat badan secara sehat.</em>
        </p>

        <hr />

        <p><strong>BMI &lt; 18.5</strong></p>
        <p>🟢 <strong>Tujuan utama:</strong> Meningkatkan berat badan dengan nutrisi tinggi kalori dan protein.</p>

        <p>🍞 <strong>Roti Gandum Selai Kacang & Pisang</strong></p>
        <p><u>Bahan:</u></p>
        <p>• Roti gandum</p>
        <p>• Selai kacang</p>
        <p>• Pisang iris</p>
        <p>💡 Padat kalori dan lemak sehat untuk menambah energi harian.</p>

        <br />

        <p>🍛 <strong>Sup Krim Ayam Kentang</strong></p>
        <p><u>Bahan:</u></p>
        <p>• Dada ayam rebus cincang</p>
        <p>• Kentang, wortel, susu full cream</p>
        <p>💡 Sumber protein dan karbohidrat kompleks untuk energi berkelanjutan.</p>

        <p className="note">
          ✨ <strong>Catatan:</strong> Makan lebih sering dan perbanyak camilan sehat agar berat naik stabil. 💪
        </p>
      </div>
    </div>
  );
};

export default ResepUnderweight;
