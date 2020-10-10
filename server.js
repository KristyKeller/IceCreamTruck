const express = require('express');

// PORT
const PORT = process.env.PORT || 3030;

// Create an instance of the express app
const app = express();

// Serve static content for the app from the "public" directory in the application directory
// app.use(express.static("public"));
app.use(express.static(__dirname + '/public'));

// Set Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//  Set Handlebars
const exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultsLayout: 'main' }));
app.set('view engine', 'handlebars');

// Import routes and give the server access to them
const routes = require("./controllers/icecream_controller.js");
app.use(routes);

// Start server to listen to client requests
app.listen(PORT, function () {
  console.log("Server listening on: http://localhost:" + PORT);
});




