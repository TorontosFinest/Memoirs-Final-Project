const { Pool } = require("pg");

const pool = new Pool({
  username: ENV["USERNAME"],
  password: ENV["PASSWORD"],
  database: ENV["DBNAME"],
  port: ENV["PORT"],
  host: ENV["HOST"],
});

module.exports = pool;
