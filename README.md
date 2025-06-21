# healthymate-calculatorbmi

# 🩺 HealthyMate - Kalkulator BMI & Gaya Hidup Sehat

HealthyMate adalah aplikasi berbasis web yang membantu pengguna untuk menghitung **Body Mass Index (BMI)** dan mendapatkan **saran gaya hidup sehat** berdasarkan hasil BMI mereka. Cocok untuk kamu yang sedang **menjaga berat badan**, **memulai diet**, atau sekadar ingin hidup lebih sehat.

---

## 🚀 Fitur Utama

- 🔐 **Autentikasi** (Login & Register)
- ⚖️ **Kalkulator BMI Interaktif**
- 📊 **Riwayat Progress Diet** per pengguna
- 📝 **Tips Hidup Sehat** berdasarkan kategori BMI
- 🍱 **Resep Sehat** sesuai kebutuhan tubuh
- 📅 **Jadwal Diet** harian untuk mahasiswa/karyawan kos

---

## 🛠️ Teknologi yang Digunakan

### Frontend
- [React.js](https://reactjs.org/)
- React Router
- Day.js (untuk format tanggal)
- CSS (custom styling)

### Backend
- [Express.js](https://expressjs.com/)
- [MySQL](https://www.mysql.com/)
- JWT (JSON Web Token) untuk autentikasi
- dotenv untuk konfigurasi lingkungan

---

## 📦 Struktur Folder

```bash
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   ├── components/
│   │   └── assets/
│   └── public/
├── backend/
│   ├── routes/
│   ├── config/
│   └── app.js
└── README.md
```

---

## ⚙️ Instalasi & Menjalankan Aplikasi

### 1. Clone Repositori

```bash
git clone https://github.com/username/healthymate-calculatorbmi.git
cd healthymate-calculatorbmi
```

### 2. Setup Backend

```bash
cd backend
npm install
```

🔑 Buat file `.env` di folder backend:

```env
DB_HOST=localhost
DB_USER=root
DB_PASS=your_mysql_password
DB_NAME=healthymate_db
JWT_SECRET=your_jwt_secret
```

⚙️ Jalankan backend:

```bash
node app.js
```

### 3. Setup Frontend

```bash
cd frontend
npm install
npm start
```

---

## 🧪 Contoh Akun

```txt
Email: demo@example.com
Password: 123456
```

---

## 🖼️ Tampilan UI

- Dashboard BMI
- Riwayat Progress
- Tips & Jadwal Diet
- Resep Sehat

![Uploading image.png…]()


📷 Sumber Gambar
Background halaman menggunakan gambar dari:

Freepik Series #22380058 - Background UI
https://www.freepik.com/serie/22380058

---

## 🤝 Kontribusi

Pull request terbuka lebar! Jika ingin menyumbang fitur atau memperbaiki bug, silakan fork dulu repo ini dan buat PR-mu.

---

## 👩‍💻 Pengembang

**Rima Tsaniyah Amilatus Sholihah**  
📧 rimatsaniyahas@gmail.com  
