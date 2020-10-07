// Dependencies
require('dotenv').config()
const express = require("express");
const connection = require('./config/connection')
// const exphbs = require("express-handlebars");

// Create an instance of the express app.
const app = express();

// PORT
const PORT = process.env.PORT || 8080;

app.get('/icecream', (req, res) => {
    res.send('Hello World!')
  })
  

  app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
  })
