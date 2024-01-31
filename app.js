// Packages
const express = require('express');
const cors = require('cors');

// Fetching environment variables
require('dotenv').config();
const PORT = process.env.PORT;

// Defining the app constant
const app = express();
module.exports = { app };


// Set Body parser, reading data from body into req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Implement CORS
app.use(
  cors({
    origin: true,
    methods: ['POST', 'GET', 'DELETE', 'OPTIONS', 'PUT'],
    credentials: true,
    maxAge: 3600,
  })
);
app.listen(PORT, () => {
  console.log(`Mail-Api Server is listening at http://localhost:${PORT} ...`);
});

// API Routes
require('./router');
