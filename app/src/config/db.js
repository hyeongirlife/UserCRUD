const mysql = require("mysql")

const db = mysql.createConnection({
  host: "hyeongeol-login.crgqxmr1poym.ap-northeast-2.rds.amazonaws.com",
  user: "admin",
  password: "q1w2e3r4",
  database: "hyeongeol_login"
})

db.connect();

module.exports = db;