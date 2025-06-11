import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/login.css';
import fotoMockup from '../assets/foto1.png';

function Landingpage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      navigate('/dashboard');
    } else {
      alert('Please fill in both email and password');
    }
  };

  return (
    <div className="login-page">
      <div className="login-wrapper">
        <img src={fotoMockup} alt="Mockup Aplikasi" className="phone-mockup" />
        
        <div className="login-box">
          <div className="logo">Healthy Mate</div>
          
          <form className="login-form" onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
            <button type="submit">Login</button>
          </form>

          <a href="/forgotpassword" className="forgot-link">Lupa Password?</a>

          <div className="divider">atau</div>

          <div className="signup-link">
            Belum punya akun? <a href="/signup">Daftar</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landingpage;
