const express = require('express');
const mongoose = require('mongoose');
const studentRoutes = require('./routes/studentRoutes');

const app = express();
const PORT = 3000;

app.use(express.json());

mongoose
  .connect('mongodb://localhost:27017/studentDB')
  .then(() => console.log('✅ Successfully connected to MongoDB!'))
  .catch((err) => console.error('Connection error:', err));

app.use('/students', studentRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});

