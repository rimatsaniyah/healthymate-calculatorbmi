import React, { useState } from "react";
import "../css/BMI.css";

const BMI = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");
  const [date, setDate] = useState("");
  const [bmi, setBmi] = useState(null);
  const [status, setStatus] = useState("");

  const calculateBMI = () => {
    if (!weight || !height || !age || !date) return;

    const heightInMeter = height / 100;
    const result = (weight / (heightInMeter * heightInMeter)).toFixed(2);
    setBmi(result);

    if (result < 18.5) {
      setStatus("Kurus 😟");
    } else if (result >= 18.5 && result < 24.9) {
      setStatus("Normal 😊");
    } else if (result >= 25 && result < 29.9) {
      setStatus("Overweight 😐");
    } else {
      setStatus("Obesitas 😟");
    }
  };

  return (
    <div className="bmi-container">
      <h2>💪 Kalkulator BMI</h2>
      <p>Cek apakah berat badan kamu ideal!</p>

      <div className="bmi-card">
        <input
          type="number"
          placeholder="Usia (tahun)"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <input
          type="number"
          placeholder="Berat badan (kg)"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
        <input
          type="number"
          placeholder="Tinggi badan (cm)"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <button onClick={calculateBMI}>Hitung BMI</button>
      </div>

      {bmi && (
        <div className="bmi-result">
          <h3>BMI Kamu: {bmi}</h3>
          <p>Status: <strong>{status}</strong></p>
          <p>Usia: {age} tahun</p>
          <p>Tanggal Pengukuran: {new Date(date).toLocaleDateString("id-ID")}</p>
        </div>
      )}
    </div>
  );
};

export default BMI;
