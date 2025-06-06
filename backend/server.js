const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const dbConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
};

app.get('/api/testdb', async (req, res) => {
  try {
    const conn = await mysql.createConnection(dbConfig);
    await conn.connect();
    await conn.end();
    res.json({ message: 'Database connected!' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to connect database' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
