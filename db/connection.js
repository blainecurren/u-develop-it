// Connect to MYSQL Database
const mysql = require("mysql2");

// Connect to Database
const db = mysql.createConnection(
  {
    host: "localhost",
    // Your MySQL username
    user: "root",
    // Your MySQL password
    password: "Jojo2727",
    database: "election",
  },
  console.log("Connected to the election database.")
);

module.exports = db;
