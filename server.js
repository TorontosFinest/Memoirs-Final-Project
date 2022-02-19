const express = require("express");
const cors = require("cors");
const client = require("./db/db");
const app = express();
const PORT = 8080 || 5000;
const cookieSession = require("cookie-session");
const bodyParser = require("body-parser");

require("dotenv").config();

app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: true,
    parameterLimit: 50000,
  })
);
app.use(
  cookieSession({
    name: "SESH",
    keys: ["key1"],
    maxAge: 24 * 60 * 60 * 1000,
  })
);

app.get("/", (req, res) => {
  console.log("just get");
});

// app.get("/dashboard/:id", (req, res) => {
//   client
//     .query(`SELECT * FROM memoirs WHERE user_id = $1 ORDER BY id`, [
//       req.session.user_id,
//     ])
//     .then((result) => {
//       res.send(result);
//     });
// });

app.get("/dashboard/:id", (req, res) => {
  const user = req.session.user_id;

  client
    .query(
      `SELECT memoirs.*, images.imgurl AS image_url
     FROM (((users INNER JOIN memoirs ON users.id = user_id)
     INNER JOIN memoir_images ON memoirs.id = memoir_id)
     INNER JOIN images ON images.id = img_id)
     WHERE users.id = $1
     ORDER BY created_at DESC
     ;`,
      [user]
    )
    .then((result) => {
      console.log(result);
      res.send(result);
    })
    .catch((err) => {
      console.log("ERR", err);
    });
});

app.get("/logout", (req, res) => {
  req.session = null;
  res.send("Successfully Logged out");
});

app.get("/login", (req, res) => {
  req.session = null;
  res.send("cleared session");
});
app.get("/register", (req, res) => {
  req.session = null;
  res.send("cleared session");
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

app.post("/create/:id", (req, res) => {
  const memoir = {
    title: req.body.title,
    description: req.body.description,
    userID: req.session.user_id,
    imageURL: req.body.image,
  };
  // console.log("MEMOIR", memoir);
  const promiseOne = client.query(
    `INSERT INTO memoirs (title,description,user_id)
   VALUES ($1, $2, $3) RETURNING *`,
    [memoir.title, memoir.description, memoir.userID]
  );

  const promiseTwo = client.query(
    `INSERT INTO images (imgurl) VALUES ($1) RETURNING *`,
    [memoir.imageURL]
  );
  return Promise.all([promiseOne, promiseTwo])
    .then(async (result) => {
      const memoir = result[0].rows[0];
      const image = result[1].rows[0];
      await client.query(
        `INSERT INTO memoir_images (img_id, memoir_id) VALUES ($1, $2) RETURNING *`,
        [image.id, memoir.id]
      );
      res.send(result);
    })
    .catch((err) => {
      console.log("ERROR IS", err);
      res.send(err.rmessage);
    });
});

app.patch("/edit/:userId/:memoirId", (req, res) => {
  const memoirId = req.params.memoirId;
  console.log("MEMOIR ID : ", memoirId);
  const title = req.body.title;
  const description = req.body.description;
  return client
    .query(`UPDATE memoirs SET title=$1, description=$2 WHERE id=$3`, [
      title,
      description,
      memoirId,
    ])
    .then((result) => {
      res.send(result.rows[0]);
      return result.rows[0];
    })
    .catch((err) => {
      res.send(err.message);
    });
});

app.delete("/dashboard/:userId/:memoirId", (req, res) => {
  console.log(req.body);
  const memoirId = req.params.memoirId;
  return client
    .query("DELETE FROM memoirs WHERE id=$1", [memoirId])
    .then(() => {
      res.send("Memoir Deleted");
    })
    .catch((err) => {
      res.send("Erorr while deleting");
    });
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

// app.post("/create/:id", (req, res) => {
//   console.log("REQBODY = ", req.body);
//   const title = req.body.title;
//   const description = req.body.description;
//   const userID = req.session.user_id;
//   const imageURL = req.body.image;
//   return client
//     .query(
//       `INSERT INTO memoirs (title,description,user_id)
//    VALUES ($1, $2, $3) RETURNING *;`,
//       [title, description, userID]
//     )
//     .then((result) => {
//       console.log("RESULT IS", result);
//       res.send(result.rows[0]);
//       return result.rows[0];
//     })
//     .catch((err) => {
//       console.log(err.message);
//     });
// });
