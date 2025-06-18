// src/pages/Login.js
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../css/login.css";
import backgroundImage from "../assets/foto1.png"; // pastikan path-nya benar

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/api/login", formData);

      if (res.data.message === "Login berhasil") {
        localStorage.setItem("token", res.data.token);
        navigate("/dashboard");
      } else {
        setError(res.data.message);
      }
    } catch (err) {
      console.error(err);
      setError("Terjadi kesalahan saat login");
    }
  };

  return (
    <div
      className="login-page"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh"
      }}
    >
      <div className="login-box">
        <div className="logo">Healthy Mate !</div>
        <form className="login-form" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button type="submit">Masuk</button>
        </form>

        {/* Tampilkan error jika ada */}
        {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}

        {/* Link lupa password */}
        <p className="forgot-password">
          <a href="/forgot-password">Lupa password?</a>
        </p>

        {/* Link ke signup */}
        <p className="signup-link">
          Belum punya akun? <a href="/signup">Daftar sekarang</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
