// src/App.js

import React from "react";
import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Tips from "./pages/Tips";
import Jadwal from "./pages/Jadwal";
import Resep from "./pages/Resep";
import BMI from "./pages/BMI"; // halaman BMI terbaru
import ForgotPassword from "./pages/ForgotPassword"; // meskipun sedang dipending, tetap disertakan

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/tips" element={<Tips />} />
      <Route path="/jadwal" element={<Jadwal />} />
      <Route path="/resep" element={<Resep />} />
      <Route path="/bmi" element={<BMI />} /> {/* sebelumnya /kalori */}
    </Routes>
  );
}

export default App;
