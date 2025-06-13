// src/pages/Login.js

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../css/login.css";
import backgroundImage from "../assets/foto1.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/login", {
        email,
        password,
      });

      if (res.data.message === "Login berhasil") {
        localStorage.setItem("user", JSON.stringify(res.data.user));
        navigate("/dashboard");
      } else {
        setError("Email atau password salah");
      }
    } catch (err) {
      setError("Terjadi kesalahan, coba lagi");
    }
  };

  return (
    <div
      className="login-page"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="login-box">
        <div className="logo">Healthy Mate !</div>

        <form onSubmit={handleLogin} className="login-form">
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
          <button type="submit">Masuk</button>
          {error && (
            <p style={{ color: "red", fontSize: "12px", marginTop: "8px" }}>{error}</p>
          )}
        </form>

        <a className="forgot-link" href="#">Lupa kata sandi?</a>
        <div className="divider">ATAU</div>
        <div className="signup-link">
          Belum punya akun? <a href="/signin">Daftar</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
