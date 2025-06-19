// src/pages/BMI.js

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/BMI.css";
import backgroundImage from "../assets/foto3.png";

const BMI = () => {
  const [berat, setBerat] = useState("");
  const [tinggi, setTinggi] = useState("");
  const [usia, setUsia] = useState("");
  const [jenisKelamin, setJenisKelamin] = useState("");
  const [tanggalTimbang, setTanggalTimbang] = useState("");
  const [bmi, setBmi] = useState(null);
  const [kategori, setKategori] = useState("");
  const navigate = useNavigate();

  const hitungBMI = () => {
    const tinggiMeter = tinggi / 100;
    const hasil = berat / (tinggiMeter * tinggiMeter);
    const hasilBulat = hasil.toFixed(1);
    setBmi(hasilBulat);

    if (hasil < 18.5) {
      setKategori("Underweight");
    } else if (hasil >= 18.5 && hasil <= 24.9) {
      setKategori("Normal");
    } else if (hasil >= 25 && hasil <= 29.9) {
      setKategori("Overweight");
    } else if (hasil >= 30 && hasil <= 34.9) {
      setKategori("Obesitas 1");
    } else {
      setKategori("Obesitas 2");
    }
  };

  const resetForm = () => {
    setBerat("");
    setTinggi("");
    setUsia("");
    setJenisKelamin("");
    setTanggalTimbang("");
    setBmi(null);
    setKategori("");
  };

  return (
    <div
      className="bmi-page"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* ✅ Tombol Back di luar form */}
      <button className="back-button" onClick={() => navigate("/dashboard")}>
        ← Kembali
      </button>

      <div className="bmi-box">
        <h2>🧮 Kalkulator BMI</h2>

        <select
          value={jenisKelamin}
          onChange={(e) => setJenisKelamin(e.target.value)}
          required
        >
          <option value="">Pilih Jenis Kelamin</option>
          <option value="Laki-laki">Laki-laki</option>
          <option value="Perempuan">Perempuan</option>
        </select>

        <input
          type="number"
          placeholder="Tinggi badan (cm)"
          value={tinggi}
          onChange={(e) => setTinggi(e.target.value)}
          required
        />

        <input
          type="number"
          placeholder="Berat badan (kg)"
          value={berat}
          onChange={(e) => setBerat(e.target.value)}
          required
        />

        <input
          type="number"
          placeholder="Usia"
          value={usia}
          onChange={(e) => setUsia(e.target.value)}
          required
        />

        <input
          type="date"
          value={tanggalTimbang}
          onChange={(e) => setTanggalTimbang(e.target.value)}
          required
        />

        <button onClick={hitungBMI}>Hitung BMI</button>

        {bmi && (
          <div className="bmi-result">
            <p>Hasil BMI kamu: <strong>{bmi}</strong></p>
            <p>Kategori: <strong>{kategori}</strong></p>

            <button onClick={resetForm} style={{ marginTop: "10px" }}>
              Hitung Ulang
            </button>

            <br />
            <a href="/tips" className="recommendation-link">
              💡 Lihat Rekomendasi Kesehatan
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default BMI;
