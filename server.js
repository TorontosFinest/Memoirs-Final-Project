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
    keys: ["key1"],
    maxAge: 24 * 60 * 60 * 1000,
  })
);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  console.log("just get");
});

app.get("/dashboard/:id", (req, res) => {
  res.send("OK");
});

app.get("/logout", (req, res) => {
  req.session = null;
  res.send("Successfully Logged out");
});

app.post("/login", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  try {
    const user = await login(email, password);
    console.log("authenticate", user);
    req.session.user_id = user.id;
    console.log("SESSSION", req.session);
    res.json(user);
  } catch (error) {
    console.error(error);
  }
});
app.post("/register", (req, res) => {
  const addUser = function (user) {
    return client
      .query(
        `INSERT INTO users (name,email,password)
   VALUES ($1, $2, $3) RETURNING *;`,
        [user["name"], user["email"], user["password"]]
      )
      .then((result) => {
        console.log("RESULT IS", result);
        return result.rows[0];
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const user = req.body;
  getUserWithEmail(user.email).then((result) => {
    if (result) {
      res.json("There is already a user with this email");
    } else {
      addUser(user).then((user) => {
        if (user) {
          req.session.user_id = user.id;
        }
        res.json(user);
      });
    }
  });
});

app.listen(PORT, () => {
  console.log(`The server is up and running and is listening on port:${PORT}`);
});

// hepler functions below
const login = function (email, password) {
  return getUserWithEmail(email).then((user) => {
    console.log("USER IS ", user);
    if (password === user.password && email === user.email) {
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

// Register Route
// app.post("/register", async (req, res) => {
//   try {
//     if (!getUserWithEmail(req.body.email)) {
//       console.log("REQBODY", req.body);
//       const user = await client.query(
//         `
//       INSERT INTO users (name,email,password)
// VALUES ($1, $2, $3) RETURNING *;`,
//         [req.body.name, req.body.email, req.body.password]
//       );
//       console.log("YOUR USER IS!", user);
//       req.session.user_id = user.rows[0].id;
//       res.json(user);
//     }
//   } catch (error) {
//     console.error(error);
//   }
// });
