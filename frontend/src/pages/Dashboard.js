import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Dashboard() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    if (query.get('login') === 'success') {
      alert('Selamat anda berhasil Masuk!');
      
      // Hapus parameter setelah tampilkan alert
      navigate('/dashboard', { replace: true });
    }
  }, [location, navigate]);

  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  );
}

export default Dashboard;
