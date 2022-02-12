const express = require("express");
const cors = require("cors");
const pool = require("./db/db");
const app = express();
const PORT = 8080 || 5000;

require("dotenv").config();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  console.log("just get");
});

app.post("/", async (req, res) => {
  try {
    const register = await pool.query(
      `
      INSERT INTO users (name,email,password)
VALUES ($1, $2, $3) RETURNING *;`,
      [req.body.fullname, req.body.email, req.body.password]
    );
    res.json(register);
  } catch (error) {
    console.error(error);
  }
});

app.listen(PORT, () => {
  console.log(`The server is up and running and is listening on port:${PORT}`);
});
