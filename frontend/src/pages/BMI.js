import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/BMI.css";
import backgroundImage from "../assets/foto3.png";

const BMI = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [jenisKelamin, setJenisKelamin] = useState("");
  const [tinggi, setTinggi] = useState("");
  const [berat, setBerat] = useState("");
  const [usia, setUsia] = useState("");
  const [tanggalTimbang, setTanggalTimbang] = useState("");
  const [bmi, setBmi] = useState(null);
  const [kategori, setKategori] = useState("");
  const [pesan, setPesan] = useState("");
  const navigate = useNavigate();

  const hitungBMI = () => {
    if (!tinggi || !berat || !usia || !jenisKelamin || !tanggalTimbang) {
      setPesan("⚠️ Harap lengkapi semua data sebelum menghitung.");
      return;
    }

    const tinggiMeter = parseFloat(tinggi) / 100;
    const nilaiBMI = (parseFloat(berat) / (tinggiMeter * tinggiMeter)).toFixed(1);
    setBmi(nilaiBMI);

    let kategoriBMI = "";
    if (nilaiBMI < 18.5) kategoriBMI = "Underweight";
    else if (nilaiBMI >= 18.5 && nilaiBMI <= 24.9) kategoriBMI = "Normal";
    else if (nilaiBMI >= 25 && nilaiBMI <= 29.9) kategoriBMI = "Overweight";
    else if (nilaiBMI >= 30 && nilaiBMI <= 34.9) kategoriBMI = "Obesitas I";
    else kategoriBMI = "Obesitas II";

    setKategori(kategoriBMI);
    setPesan("");
  };

  const simpanData = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/bmi", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_id: user.id, // ✅ penting!
          jenis_kelamin: jenisKelamin,
          tinggi,
          berat,
          usia,
          tanggal: tanggalTimbang,
          bmi,
          kategori,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        alert("✅ Data BMI berhasil disimpan!");
        navigate("/progress");
      } else {
        console.error("Gagal menyimpan:", result.message);
        alert("❌ Gagal menyimpan data BMI.");
      }
    } catch (error) {
      console.error("Gagal menyimpan data:", error);
      alert("❌ Terjadi kesalahan saat menyimpan data.");
    }
  };

  const goToTips = () => {
    const path = `/tips/${kategori.toLowerCase().replace(/\s/g, "")}`;
    navigate(path);
  };

  return (
    <div
      className="bmi-page"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        padding: "40px 20px",
      }}
    >
      <button className="back-button" onClick={() => navigate("/dashboard")}>
        ← Kembali
      </button>

      <div className="bmi-box">
        <h2>📏 Kalkulator BMI</h2>

        <div className="form-group">
          <label>Jenis Kelamin:</label>
          <select value={jenisKelamin} onChange={(e) => setJenisKelamin(e.target.value)}>
            <option value="">Pilih</option>
            <option value="Laki-laki">Laki-laki</option>
            <option value="Perempuan">Perempuan</option>
          </select>
        </div>

        <div className="form-group">
          <label>Tinggi Badan (cm):</label>
          <input type="number" value={tinggi} onChange={(e) => setTinggi(e.target.value)} />
        </div>

        <div className="form-group">
          <label>Berat Badan (kg):</label>
          <input type="number" value={berat} onChange={(e) => setBerat(e.target.value)} />
        </div>

        <div className="form-group">
          <label>Usia:</label>
          <input type="number" value={usia} onChange={(e) => setUsia(e.target.value)} />
        </div>

        <div className="form-group">
          <label>Tanggal Timbang:</label>
          <input type="date" value={tanggalTimbang} onChange={(e) => setTanggalTimbang(e.target.value)} />
        </div>

        <div className="form-buttons">
          <button onClick={hitungBMI}>Hitung BMI</button>
        </div>

        {bmi && (
          <div className="hasil">
            <h3>Hasil BMI: {bmi}</h3>
            <p>Kategori: {kategori}</p>
            <div className="form-buttons">
              <button className="save-button" onClick={simpanData}>Simpan Data</button>
              <button className="tips-button" onClick={goToTips}>Tips Kesehatan</button>
            </div>
          </div>
        )}

        {pesan && <p className="pesan">{pesan}</p>}
      </div>
    </div>
  );
};

export default BMI;
