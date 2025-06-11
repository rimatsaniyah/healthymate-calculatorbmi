// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';      // pastikan index.css juga sudah dipindah
import './css/theme.css';      // update path sesuai lokasi baru
import './css/App.css';
import './css/login.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
