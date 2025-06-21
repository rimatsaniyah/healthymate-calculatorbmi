import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../css/ForgotPassword.css";
import backgroundImage from "../assets/foto2.png";

function ForgotPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  const handleReset = (e) => {
    e.preventDefault();
    if (email) {
      alert(`Link reset password telah dikirim ke ${email}`);
      navigate('/'); // Kembali ke halaman login setelah submit
    } else {
      alert('Masukkan email yang valid');
    }
  };

  return (
    <div 
      className="forgot-password-page"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: "'Arial', sans-serif",
        position: 'relative',  // penting agar back-button absolute bekerja
        padding: '20px',
      }}
    >
      {/* Tombol Kembali di luar box, posisi absolute */}
      <button className="back-button" onClick={() => navigate('/')}>
        ← Kembali
      </button>

      <div className="forgot-password-box">
        <h2>Lupa Password</h2>

        <form className="forgot-password-form" onSubmit={handleReset}>
          <input
            type="email"
            placeholder="Masukkan email Anda"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <button type="submit" className="forgot-form-button">
            Kirim Link Reset
          </button>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
