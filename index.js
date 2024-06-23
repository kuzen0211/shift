const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const uuid = require('uuid');
const exp = require('constants');
const fs = require('fs').promises;
const authRouter = require('./routes/auth');
const shiftRouter = require('./routes/shift');
const dotenv = require('dotenv').config();
const cron = require('node-cron');
const User = require('./models/userModel');

const { MONGO_URL } = process.env;

const app = express();

mongoose
  .connect(MONGO_URL)
  .then(con => {
    console.log('Database connection successful');
  })
  .catch(err => {
    console.log(err);

    process.exit(1);
  });

cron.schedule('*/5 * * * *', async () => {
  try {
    await User.findOne(); // Простий запит для прогрівання
  } catch (error) {
    console.error('Error during warming up:', error);
  }
});

app.use(cors());

app.use(express.json());
app.use(express.static('public'));

app.use('/api/auth', authRouter);
app.use('/api/shift', shiftRouter);

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' });
});

app.use((err, req, res, next) => {
  const { status = 500, message = 'Server error' } = err;
  res.status(status).json({ message });
});
const port = 4000;

app.listen(port, () => {
  console.log(`Server up and running on port: ${port}`);
});
