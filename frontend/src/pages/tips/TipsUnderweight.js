import React from "react";
import { useNavigate } from "react-router-dom";
import "../../css/Tips.css";
import backgroundImage from "../../assets/foto3.png";

const TipsUnderweight = () => {
    const navigate = useNavigate(); // ✅ definisikan navigate

  return (
    <div
      className="tips-page"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        padding: "40px 20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Segoe UI, sans-serif",
      }}
    >
      <button className="back-button" onClick={() => navigate("/tips")}>
        ← Kembali
      </button>

        <div className="tips-box">
          <h2>📋 Tips Hidup Sehat</h2>
          <p className="intro">
            💡 <em>Pahami tubuhmu, sayangi dirimu. Setiap kategori BMI punya pendekatan sehat yang berbeda!</em>
          </p>

          <hr />

          <p><strong>BMI &lt; 18.5</strong></p>

          <p>🟢 <strong>Tujuan utama:</strong> Menaikkan berat badan secara sehat dan bertahap.</p>

          <p>✅ <strong>Tips Sehat:</strong></p>
            <p>🥜 Tambahkan kalori sehat dalam makanan </p>
              <p>(alpukat, kacang-kacangan, keju, minyak zaitun).</p>
            <p>🥩 Konsumsi makanan tinggi protein: </p>
              <p>telur, ayam, tempe, tahu, ikan.</p>
            <p>🥣 Makan 5–6 kali sehari dalam porsi kecil tapi sering.</p>
            <p>🧘‍♀️ Hindari stres berlebihan—bisa mengurangi nafsu makan.</p>
            <p>🏋️‍♂️ Lakukan olahraga kekuatan </p>
              <p>seperti angkat beban agar berat naik karena otot, bukan lemak.</p>
            <p>💧 Minum air 30 menit setelah makan agar tidak mengurangi nafsu makan.</p>

          <p className="note">
            ✨ <strong>Catatan:</strong> Perubahan gaya hidup harus dilakukan secara <em>bertahap dan konsisten</em>. Jangan terburu-buru, karena yang paling penting adalah <strong>kesehatan jangka panjang</strong>. 💪🌱
          </p>
        </div>
    </div>
  );
};

export default TipsUnderweight;
