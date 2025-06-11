const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', // default XAMPP tidak pakai password
  database: 'healthymate' // <- sudah benar
});

connection.connect((err) => {
  if (err) {
    console.error('Koneksi database gagal:', err);
  } else {
    console.log('Koneksi database berhasil');
  }
});

module.exports = connection;
