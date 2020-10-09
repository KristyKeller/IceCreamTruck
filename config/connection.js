// MySQL connection
const mysql = require("mysql");

require('dotenv').config()

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: process.env.MYSQL_PASS,
    database: "icecream_db"
});

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
