import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Progress.css";
import backgroundImage from "../assets/foto3.png";

const Progress = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/api/bmi")
      .then((res) => res.json())
      .then((json) => {
        console.log("Response dari API BMI:", json);
        // Jika API mengembalikan objek dengan properti `data`, ambil isinya
        if (Array.isArray(json)) {
          setData(json);
        } else if (Array.isArray(json.data)) {
          setData(json.data);
        } else {
          console.error("Data BMI bukan array:", json);
          setData([]);
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
                  <td>{entry.tanggal}</td>
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
