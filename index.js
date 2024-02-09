const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const uuid = require('uuid');
const exp = require('constants');
const fs = require('fs').promises;
require('dotenv').config();

const { MONGO_URL } = process.env;

const app = express();

const authRouter = require('./routes/auth');

mongoose
  .connect(MONGO_URL)
  .then(con => {
    console.log('Database connection successful');
  })
  .catch(err => {
    console.log(err);

    process.exit(1);
  });

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRouter);

app.post('/api/users', async (req, res) => {
  const { name, year } = req.body;
  const dataFromDB = await fs;
  try {
    res.status(200).json({
      users: {
        name: 'Bohdan',
        year: 1989,
      },
    });
  } catch (error) {
    console.log(error);
  }
});

const port = 3000;

app.listen(port, () => {
  console.log(`Server up and running on port: ${port}`);
});
