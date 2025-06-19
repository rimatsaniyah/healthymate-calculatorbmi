// src/pages/Signup.js

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../css/Signup.css";
import backgroundImage from "../assets/foto2.png";

const Signup = () => {
  const [username, setUsername] = useState(""); // ganti dari "nama" jadi "username"
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/signup", {
        username,
        email,
        password,
      });

      if (res.data.message === "Pendaftaran berhasil") {
        setSuccess(true);
        setError("");
      } else {
        setError(res.data.message || "Gagal mendaftar");
      }
    } catch (err) {
      if (err.response?.data?.message) {
        setError(err.response.data.message);
      } else {
        setError("Terjadi kesalahan saat mendaftar");
      }
    }
  };

  const handleToLogin = () => {
    navigate("/login");
  };

  return (
    <div
      className="signup-page"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* ✅ Tombol Back di luar signup-box */}
      <button className="back-button" onClick={() => navigate("/")}>
        ← Kembali
      </button>

      <div className="signup-box">
        <div className="logo">Healthy Mate !</div>

        {success ? (
          <div className="popup-success">
            <p style={{ color: "green", fontWeight: "bold" }}>
              ✅ Berhasil Terdaftar Sebagai Member!
            </p>
            <button onClick={handleToLogin} className="signup-form-button">
              Ke Halaman Login
            </button>
          </div>
        ) : (
          <>
            <form onSubmit={handleSignup} className="signup-form">
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
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
                <p style={{ color: "red", marginTop: "8px" }}>{error}</p>
              )}
            </form>
            <p style={{ marginTop: "12px" }}>
              Sudah punya akun? <a href="/login">Masuk</a>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default Signup;
