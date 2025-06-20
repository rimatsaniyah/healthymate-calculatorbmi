// src/App.js

import React from "react";
import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import BMI from "./pages/BMI";
import ForgotPassword from "./pages/ForgotPassword";

// Tips
import Tips from "./pages/tips/Tips";
import TipsUnderweight from "./pages/tips/TipsUnderweight";
import TipsNormal from "./pages/tips/TipsNormal";
import TipsOverweight from "./pages/tips/TipsOverweight";
import TipsObesitas1 from "./pages/tips/TipsObesitas1";
import TipsObesitas2 from "./pages/tips/TipsObesitas2";

// Jadwal
import Jadwal from "./pages/jadwal/Jadwal";
import JadwalUnderweight from "./pages/jadwal/JadwalUnderweight";
import JadwalNormal from "./pages/jadwal/JadwalNormal";
import JadwalOverweight from "./pages/jadwal/JadwalOverweight";
import JadwalObesitas1 from "./pages/jadwal/JadwalObesitas1";
import JadwalObesitas2 from "./pages/jadwal/JadwalObesitas2";

// Resep
import Resep from "./pages/resep/Resep";
import ResepUnderweight from "./pages/resep/ResepUnderweight";
import ResepNormal from "./pages/resep/ResepNormal";
import ResepOverweight from "./pages/resep/ResepOverweight";
import ResepObesitas1 from "./pages/resep/ResepObesitas1";
import ResepObesitas2 from "./pages/resep/ResepObesitas2";

import Progress from "./pages/Progress";

function App() {
  return (
    <Routes>
      {/* Auth */}
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />

      {/* Dashboard & BMI */}
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/bmi" element={<BMI />} />

      {/* Tips */}
      <Route path="/tips" element={<Tips />} />
      <Route path="/tips/underweight" element={<TipsUnderweight />} />
      <Route path="/tips/normal" element={<TipsNormal />} />
      <Route path="/tips/overweight" element={<TipsOverweight />} />
      <Route path="/tips/obesitas1" element={<TipsObesitas1 />} />
      <Route path="/tips/obesitas2" element={<TipsObesitas2 />} />

      {/* Jadwal */}
      <Route path="/jadwal" element={<Jadwal />} />
      <Route path="/jadwal/underweight" element={<JadwalUnderweight />} />
      <Route path="/jadwal/normal" element={<JadwalNormal />} />
      <Route path="/jadwal/overweight" element={<JadwalOverweight />} />
      <Route path="/jadwal/obesitas1" element={<JadwalObesitas1 />} />
      <Route path="/jadwal/obesitas2" element={<JadwalObesitas2 />} />

      {/* Resep */}
      <Route path="/resep" element={<Resep />} />
      <Route path="/resep/underweight" element={<ResepUnderweight />} />
      <Route path="/resep/normal" element={<ResepNormal />} />
      <Route path="/resep/overweight" element={<ResepOverweight />} />
      <Route path="/resep/obesitas1" element={<ResepObesitas1 />} />
      <Route path="/resep/obesitas2" element={<ResepObesitas2 />} />
      
      <Route path="/progress" element={<Progress />} />
      
    </Routes>
  );
}

export default App;
