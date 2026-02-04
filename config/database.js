const mysql = require('mysql2');
require('dotenv').config();

const pool = mysql.createPool({
  host: "ballast.proxy.rlwy.net",
  user: "root",
  password: "SZudvdfTeedMEzjrFTKEHjbFdcXwQdXk",
  database: "railway",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

const promisePool = pool.promise();

module.exports = promisePool;
