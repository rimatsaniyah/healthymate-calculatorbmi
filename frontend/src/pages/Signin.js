import React, { useState } from 'react';

function Signin() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Password dan konfirmasi password tidak cocok!");
      return;
    }
    alert(`User ${formData.username} berhasil daftar!`);

    // Reset form (opsional)
    setFormData({
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    });
  };

  return (
    <div style={{ maxWidth: 400, margin: 'auto', padding: 20 }}>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        {['username', 'email', 'password', 'confirmPassword'].map(field => (
          <div key={field} style={{ marginBottom: 10 }}>
            <label style={{ textTransform: 'capitalize' }}>
              {field === 'confirmPassword' ? 'Confirm Password' : field}:
            </label><br />
            <input
              type={field.includes('password') ? 'password' : (field === 'email' ? 'email' : 'text')}
              name={field}
              value={formData[field]}
              onChange={handleChange}
              required
              style={{ width: '100%', padding: 8 }}
            />
          </div>
        ))}
        <button type="submit" style={{ padding: '10px 20px' }}>
          Register
        </button>
      </form>
    </div>
  );
}

export default Signin;
