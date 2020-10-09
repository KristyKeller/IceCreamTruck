// Dependencies
require('dotenv').config()
const express = require('express');
const connection = require('./config/connection');
const exphbs = require('express-handlebars');

// Create an instance of the express app.
const app = express();

// PORT
const PORT = process.env.PORT || 3306;

app.engine('handlebars', exphbs ({ defaultsLayout: 'main' }));
app.set('view engine', 'handlebars');

// Set Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const iceCream = [
  {
    id: 1,
    name: "Chocolate ice cream",
    devoured: false
  },
  {
    id: 2,
    name: "Vanilla ice cream",
    devoured: false 
  },
  {
    id: 3,
    name: "Strawberry ice cream",
    devoured: false
  },
];

app.use(express.static("public"));

// Import routes and give the server access to them.
var routes = require("./controllers/icecream_Controller.js");
app.use(routes);
app.listen(PORT, function() {
  console.log("App now listening at localhost:" + PORT);
});



//  Routes Controller 
app.get('/', (req, res) => {
  res.render('index', {
    iceCream
  });
});

app.get('/api/iceCream',(req, res) => {
  // MySQL Select ice cream array from DB
  res.json(iceCream);
});

app.put('/api/iceCream/:id', (req, res) => {
  const chosen = req.params.id;
  // MySql Update
  
});

app.post('/api/iceCream', (req,res) => {
  let newIceCream = req.body;
  // MySql Insert
});


// require controller
// Import routes and give the server access to them.
app.listen(PORT, function() {
  console.log(`App listening at http://localhost:${PORT}`);
});

