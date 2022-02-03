const { Pool } = require("pg");

const pool = new Pool({
  username: "postgres",
  password: "7299",
  database: "masalablvd",
  port: "5433",
  host: "localhost",
});

module.exports = pool;

// I HAVE INSTALLED POSTGRES IN MY LOCAL SYSTEM AND THESE ARE DETAILS OF THE DATABASE I HAVE LOCALLY

// NEED TO MOVE THIS TO DOT ENV FILE FOR BETTER MODULARIZATION
