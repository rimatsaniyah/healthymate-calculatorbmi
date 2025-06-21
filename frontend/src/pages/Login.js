// src/pages/Login.js
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../css/login.css";
import backgroundImage from "../assets/foto1.png";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/api/login", formData);

      if (res.data.message === "Login berhasil") {
        // Simpan token dan data user ke localStorage
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        localStorage.setItem("user_id", res.data.user.id); // ⬅️ Tambahan penting agar Progress.js bisa ambil data

        navigate("/dashboard");
      } else {
        setError(res.data.message);
      }
    } catch (err) {
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
        minHeight: "100vh",
      }}
    >
      <div className="login-box">
        <div className="logo">Healthy Mate</div>
        <p className="tagline">Teman Diet & Olahragamu</p>

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

        {error && <p className="error-msg">{error}</p>}

        <p className="forgot-password">
          <a href="/forgot-password">Lupa password?</a>
        </p>
        <p className="signup-link">
          Belum punya akun? <a href="/signup">Daftar sekarang</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
