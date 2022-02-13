const express = require("express");
const cors = require("cors");
const client = require("./db/db");
const app = express();
const PORT = 8080 || 5000;
const cookieSession = require("cookie-session");
const bodyParser = require("body-parser");
const memoriesRoutes = require("./Routes/memories");

require("dotenv").config();

app.use(cors());
app.use(express.json());
app.use(
  cookieSession({
    name: "SESH",
    keys: ["key1,", "key2"],
  })
);

app.use(memoriesRoutes);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  console.log("just get");
});

app.get("/login", (req, res) => {});

app.post("/register", async (req, res) => {
  try {
    console.log("REQBODY", req.body);
    const register = await client.query(
      `
      INSERT INTO users (name,email,password)
VALUES ($1, $2, $3) RETURNING *;`,
      [req.body.name, req.body.email, req.body.password]
    );
    res.json(register);
  } catch (error) {
    console.error(error);
  }
});

app.listen(PORT, () => {
  console.log(`The server is up and running and is listening on port:${PORT}`);
});
