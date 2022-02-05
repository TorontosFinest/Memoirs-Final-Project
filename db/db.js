const { Pool } = require("pg");

const pool = new Pool({
  username: "postgres",
  password: "7299",
  database: "masalablvd",
  port: "5433",
  host: "localhost",
});

module.exports = pool;
