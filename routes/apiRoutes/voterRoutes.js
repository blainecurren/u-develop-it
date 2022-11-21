const express = require("express");
const router = express.Router();
const db = require("../../db/connection");
const inputCheck = require("../../utils/inputCheck");

router.get("/voters", (req, res) => {
  const sql = `SELECT * FROM voters`;

  db.query(sql, (err, rows) => {
    if (err) {
      res.status(500).json({ error: message });
      return;
    }
    res.json({
      message: "success",
      data: rows,
    });
  });
});

// GET a single voter
router.get("/voter/:id", (req, res) => {
  const sql = `SELECT * FROM voters WHERE id = ?`;
  const params = [req.params.id];

  db.query(sql, params, (err, row) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: "success",
      data: row,
    });
  });
});

router.post("/voter", ({ body }, res) => {
  // Data validation
  const errors = inputCheck(body, "first_name", "last_name", "email");
  if (errors) {
    res.status(400).json({ error: errors });
    return;
  }

  const sql = `INSERT INTO voters (first_name, last_name, email) VALUES (?,?,?)`;
  const params = [body.first_name, body.last_name, body.email];

  db.query(sql, params, (err, result) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: "success",
      data: body,
    });
  });
});

router.put("/voter/:id", (req, res) => {
    // Data validation
    const errors = inputCheck(req.body, "email");
    if (errors) {
      res.status(400).json({ error: errors });
      return;
    }

    const sql = `UPDATE voters SET email =? WHERE id =?`;
    const params = [req.body.email, req.params.id];

    db.query = [req.body.email, req.params.id]


});

module.exports = router;
