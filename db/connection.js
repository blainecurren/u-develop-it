const mysql = require("mysql2");

// Connect to database
const db = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "Jojo2727",
    database: "election",
  },
  console.log("Connected to the election database.")
);
