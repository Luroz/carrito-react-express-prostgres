const Pool = require('pg').Pool
const pool = new Pool({
  user: "me",
  host: 'localhost',
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
})

module.exports = pool