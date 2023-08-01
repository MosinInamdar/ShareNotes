// server.js
const express = require('express');
const cors = require('cors');
const users = require('./users');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({ origin: process.env.FRONTEND_URL }));
app.use(express.json());

// Login route
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Find the user with the provided username
  const user = users.find((user) => user.username === username);

  if (user && user.password === password) {
    res.status(200).json({ message: 'Login successful' });
  } else {
    res.status(401).json({ error: 'Invalid credentials' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});