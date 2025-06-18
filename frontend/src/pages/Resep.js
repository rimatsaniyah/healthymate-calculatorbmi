import React from "react";

const Resep = () => {
  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h2 style={{ color: "#4caf50" }}>🍲 Rekomendasi Resep Sehat</h2>
      <div style={{ marginTop: "20px", lineHeight: "1.8" }}>
        <h4>1. Oatmeal Pisang</h4>
        <p>
          Campurkan oatmeal, pisang yang dihaluskan, dan susu rendah lemak. Masak selama 5 menit dan sajikan hangat.
        </p>
        <h4>2. Salad Ayam Panggang</h4>
        <p>
          Iris dada ayam panggang, campur dengan sayuran segar seperti tomat, mentimun, dan selada. Tambahkan minyak zaitun dan lemon sebagai dressing.
        </p>
      </div>
    </div>
  );
};

export default Resep;
