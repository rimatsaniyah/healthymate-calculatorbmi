// src/pages/BMI.js
import React, { useState } from "react";
import "../css/BMI.css";
import { useNavigate } from "react-router-dom"; // ✅ import useNavigate

const BMI = () => {
  const navigate = useNavigate(); // ✅ inisialisasi navigate
  const [berat, setBerat] = useState("");
  const [tinggi, setTinggi] = useState("");
  const [usia, setUsia] = useState("");
  const [tanggal, setTanggal] = useState("");
  const [hasil, setHasil] = useState(null);

  const hitungBMI = () => {
    if (!berat || !tinggi || !usia || !tanggal) return;
    const tinggiMeter = tinggi / 100;
    const bmi = berat / (tinggiMeter * tinggiMeter);
    setHasil(bmi.toFixed(2));
  };

  return (
    <div className="bmi-wrapper">
      {/* ✅ Tombol Back di luar box */}
      <button className="back-button" onClick={() => navigate("/dashboard")}>
        ← Kembali
      </button>

      <div className="bmi-container">
        <h2>Kalkulator BMI</h2>
        <p>Masukkan data berikut untuk menghitung BMI Anda</p>

        <div className="bmi-card">
          <input
            type="number"
            placeholder="Berat badan (kg)"
            value={berat}
            onChange={(e) => setBerat(e.target.value)}
          />
          <input
            type="number"
            placeholder="Tinggi badan (cm)"
            value={tinggi}
            onChange={(e) => setTinggi(e.target.value)}
          />
          <input
            type="number"
            placeholder="Usia (tahun)"
            value={usia}
            onChange={(e) => setUsia(e.target.value)}
          />
          <input
            type="date"
            placeholder="Tanggal input"
            value={tanggal}
            onChange={(e) => setTanggal(e.target.value)}
          />
          <button onClick={hitungBMI}>Hitung BMI</button>
        </div>

        {hasil && (
          <div className="bmi-result">
            <h4>Hasil BMI Anda: {hasil}</h4>
          </div>
        )}
      </div>
    </div>
  );
};

export default BMI;
