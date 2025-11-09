// app.js
const express = require('express');
const cors = require('cors');
const userRoutes = require('./src/routes/user.routes.js'); 

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
  res.send('CRUD API Running!');
});

module.exports = app;