const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 5000;
const songsRouter = require("./routes/song.router");
const usersRouter = require("./routes/user.router");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// STATIC FILE SETUP/CONFIGURATION
app.use(express.static("server/public"));

app.use("/songs", songsRouter);
app.use("/users", usersRouter);

// KICK OFF APP
app.listen(PORT, () => {
  console.log("Server running on PORT:", PORT);
});
