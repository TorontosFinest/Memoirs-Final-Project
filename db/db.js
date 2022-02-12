require("dotenv").config();
// other dependencies
const pg = require("pg");
// const pool = new Pool({
//   username: "postgres",
//   // username: process.env.USERNAME,
//   password: "admin",
//   // password: process.env.PASSWORD,
//   database: "mmemoirs",
//   // database: process.env.DB_NAME,
//   port: "5433",
//   // port: process.env.PORT,
//   host: "localhost",
//   // host: process.env.HOST,
// });

const connectionString = `postgresql://${process.env.USERNAME}:${process.env.PASSWORD}@${process.env.HOST}:${process.env.PORT}/${process.env.DB_NAME}?sslmode=disable`;
const client = new pg.Client({
  connectionString: connectionString || "",
  ssl: process.env.DATABASE_URL ? { rejectUnauthorized: false } : false,
});
client
  .connect()
  .then(() => console.log("connected"))
  .catch((err) => console.error("connection error", err.stack));

module.exports = client;
