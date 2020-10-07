require('dotenv').config()

const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: process.env.MYSQL_PASS,
    database: "icecream"
});

connection.connect(err => {
    if (err) {
    console.log("Error connecting: " + err.stack);
    return;
    }
    console.log("connected to db")
});