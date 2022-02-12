const { Pool } = require("pg");

const pool = new Pool({
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.PORT,
  host: process.env.HOST,
});

module.exports = pool;
