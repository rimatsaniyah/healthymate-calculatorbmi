import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Forgotpassword() {
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
    <div style={{ maxWidth: 400, margin: 'auto', padding: 20, textAlign: 'center' }}>
      <h2>Lupa Password</h2>
      <form onSubmit={handleReset}>
        <input
          type="email"
          placeholder="Masukkan email Anda"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          style={{ width: '100%', padding: 8, margin: '10px 0' }}
        />
        <button type="submit" style={{ padding: '10px 20px', cursor: 'pointer' }}>
          Kirim Link Reset
        </button>
      </form>
      <button onClick={() => navigate('/')} style={{ marginTop: 10, cursor: 'pointer' }}>
        Kembali ke Login
      </button>
    </div>
  );
}

export default Forgotpassword;
