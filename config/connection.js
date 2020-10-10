// MySQL connection
require('dotenv').config();
var mysql = require("mysql");
var connection;

if(process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: process.env.MYSQL_PASS,
    database: "icecream"
  });
}
// Make connection 
connection.connect(err => {
    if (err) {
    console.log("Error connecting: " + err.stack);
    return;
    }
    console.log("connected as id " + connection.threadId);
});

// Export connection for ORM to use
module.exports = connection;
