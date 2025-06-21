// src/pages/Progress.js
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import "dayjs/locale/id";
import "../css/Progress.css";
import backgroundImage from "../assets/foto3.png";

const Progress = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const userId = localStorage.getItem("user_id");

    if (!userId) {
      console.error("User ID tidak ditemukan di localStorage.");
      return;
    }

    fetch(`http://localhost:5000/api/bmi/${userId}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Gagal mengambil data dari server");
        }
        return res.json();
      })
      .then((json) => {
        console.log("Response dari API BMI:", json);
        if (Array.isArray(json)) {
          setData(json);
        } else {
          console.error("Data yang diterima bukan array:", json);
        }
      })
      .catch((err) => console.error("Gagal mengambil data BMI:", err));
  }, []);

  return (
    <div
      className="progress-page"
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

      <div className="progress-box">
        <h2>📊 Riwayat Progress Diet</h2>
        {data.length > 0 ? (
          <table className="progress-table">
            <thead>
              <tr>
                <th>No</th>
                <th>Tanggal</th>
                <th>Jenis Kelamin</th>
                <th>Tinggi (cm)</th>
                <th>Berat (kg)</th>
                <th>Usia</th>
                <th>BMI</th>
                <th>Kategori</th>
              </tr>
            </thead>
            <tbody>
              {data.map((entry, index) => (
                <tr key={entry.id}>
                  <td>{index + 1}</td>
                  <td>{dayjs(entry.tanggal).locale("id").format("DD MMMM YYYY")}</td>
                  <td>{entry.jenis_kelamin}</td>
                  <td>{entry.tinggi}</td>
                  <td>{entry.berat}</td>
                  <td>{entry.usia}</td>
                  <td>{entry.bmi}</td>
                  <td>{entry.kategori}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p style={{ textAlign: "center", marginTop: "20px", color: "#fff" }}>
            Belum ada data riwayat diet yang tersedia.
          </p>
        )}
      </div>
    </div>
  );
};

export default Progress;
