const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const uuid = require('uuid');
const exp = require('constants');
const fs = require('fs').promises;
require('dotenv').config();
const authRouter = require('./routes/auth');

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

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRouter);

// app.post('/api/auth/register', async (req, res) => {
//   const newUser = await User.create(req.body);

//   try {
//     res.status(201).json({
//       email: newUser.email,
//       name: newUser.name,
//       password: newUser.password,
//     });
//   } catch (error) {
//     console.log(error);
//   }
// });

const port = 3000;

app.listen(port, () => {
  console.log(`Server up and running on port: ${port}`);
});
