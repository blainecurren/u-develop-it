// Connect to MYSQL Database
const mysql = require("mysql2");

const express = require("express");

// PORT Designation and App expression
const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

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

// Query the database to test the connection
// db.query(`SELECT * FROM candidates`, (err, rows) => {
//   console.log(rows);
// });

// GET a single candidate
db.query(`SELECT * FROM candidates WHERE id = 1`, (err, row) => {
  if (err) {
    console.log(err);
  }
  console.log(row);
});

// Default response for any other request (Not Found) (Catchall)
app.use((req, res) => {
  res.status(404).end();
});

// Function to start Express.js Server on port 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
