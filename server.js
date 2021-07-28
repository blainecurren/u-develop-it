const express = require("express");
const { restElement } = require("@babel/types");

// inputCheck() function
const inputCheck = require("./utils/inputCheck");

// PORT Designation and App expression
const PORT = process.env.PORT || 3001;
const app = express();

// Connect connection.js
const db = require("./db/connection");

const apiRoutes = require("./routes/apiRoutes");

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Use apiRoutes
app.use("/api/", apiRoutes);

// Query the database to test the connection
// db.query(`SELECT * FROM candidates`, (err, rows) => {
//   console.log(rows);
// });

// Default response for any other request (Not Found) (Catchall)
app.use((req, res) => {
  res.status(404).end();
});

// Function to start Express.js Server on port 3001
db.connect((err) => {
  if (err) throw err;
  console.log("Database connected.");
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
