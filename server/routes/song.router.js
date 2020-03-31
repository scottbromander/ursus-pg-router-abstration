const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

// GET ROUTE for All Songs
router.get("/", (req, res) => {
  const queryText = `SELECT * FROM "songs";`;
  pool
    .query(queryText)
    .then(responseDB => {
      const dbRows = responseDB.rows;
      console.table(dbRows);
      res.send(dbRows);
    })
    .catch(err => {
      console.log("ERROR:", err);
      res.sendStatus(500);
    });
});

// POST ROUTE for saving a song
router.post("/", (req, res) => {
  const dataSentFromClient = req.body;

  const queryText = `INSERT INTO "songs" ("rank", "track", "artist", "published")
    VALUES ($1, $2, $3, $4);`;

  pool
    .query(queryText, [
      dataSentFromClient.rank,
      dataSentFromClient.track,
      dataSentFromClient.artist,
      dataSentFromClient.published,
    ])
    .then(responseDb => {
      console.log(responseDb);
      res.sendStatus(201);
    })
    .catch(err => {
      console.log("ERROR:", err);
      res.sendStatus(500);
    });
});

router.get("/dogs", (req, res) => {
  res.send("Woof!");
});

module.exports = router;
