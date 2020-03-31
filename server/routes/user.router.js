const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

// GET ROUTE for All Songs
router.get("/", (req, res) => {
  const queryString = `SELECT * FROM "user";`;

  pool
    .query(queryString)
    .then(response => {
      res.send(response.rows);
    })
    .catch(err => {
      console.log(err);
    });
});

// POST ROUTE for saving a song
router.post("/", (req, res) => {});

module.exports = router;
