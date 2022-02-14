const express = require("express");
const cors = require("cors");
const client = require("./db/db");
const app = express();
const PORT = 8080 || 5000;
const cookieSession = require("cookie-session");
const bodyParser = require("body-parser");

require("dotenv").config();

app.use(cors());
app.use(express.json());
app.use(
  cookieSession({
    name: "SESH",
    keys: ["key1,", "key2"],
  })
);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  console.log("just get");
});

// Register Route
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

app.get("/dashboard/:id", (req, res) => {
  res.send("OK");
});

app.post("/login", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  try {
    const user = await login(email, password);
    console.log("authenticate", user);
    res.send(user);
  } catch (error) {
    console.error(error);
  }
});

app.listen(PORT, () => {
  console.log(`The server is up and running and is listening on port:${PORT}`);
});

// hepler functions below
const login = function (email, password) {
  return getUserWithEmail(email).then((user) => {
    console.log("USER IS ", user);
    if (password === user.password) {
      console.log("USER IS", user);
      return user;
    }
    return null;
  });
};

const getUserWithEmail = function (email) {
  return client
    .query("SELECT * FROM users WHERE email = $1", [email])
    .then((result) => {
      console.log("RESULT", result.rows[0]);
      return result.rows[0];
    })
    .catch((err) => {
      console.log(err.message);
    });
};
