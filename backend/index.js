const express = require("express");
const app = express();
const cors = require("cors");
const pg = require("./db/db");

const PORT = 8080 || 5000;

app.use(cors());
app.use(express.json());

app.get("/homepage", (req, res) => {
  res.send("HomePage");
});

//listen to server
app.listen(PORT, () => {
  console.log(`The Server Has Started Listening on Port:${PORT}`);
});
