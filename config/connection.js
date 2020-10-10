// MySQL connection
require('dotenv').config();
var mysql = require("mysql");
var connection;

if(process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "iwqrvsv8e5fz4uni.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "efa2w3nh3rd9p18x",
    password: process.env.MYSQL_PASS,
    database: "hayjmcznfu4swcex"
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
