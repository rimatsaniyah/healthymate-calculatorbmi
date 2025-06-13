// src/pages/Signup.js

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../css/Signup.css";
import backgroundImage from "../assets/foto1.png"; // sama dengan Login.js

const Signup = () => {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/signup", {
        nama,
        email,
        password,
      });

      if (res.data.message === "Pendaftaran berhasil") {
        navigate("/login");
      } else {
        setError(res.data.message || "Gagal mendaftar");
      }
    } catch (err) {
      setError("Terjadi kesalahan saat mendaftar");
    }
  };

  return (
    <div
      className="signup-page"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="signup-box">
        <div className="logo">Healthy Mate !</div>
        <form onSubmit={handleSignup} className="signup-form">
          <input
            type="text"
            placeholder="Nama Lengkap"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Kata Sandi"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Daftar</button>
          {error && (
            <p style={{ color: "red", fontSize: "12px", marginTop: "8px" }}>{error}</p>
          )}
        </form>
        <div className="divider">ATAU</div>
        <div className="login-link">
          Sudah punya akun? <a href="/login">Masuk</a>
        </div>
      </div>
    </div>
  );
};

export default Signup;
