let mysql = require("mysql");
let config = require("../config");

let con = mysql.createConnection({
  host: config.db.host,
  user: config.db.user,
  password: config.db.password,
});
con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("CREATE DATABASE IF NOT EXISTS RPG_DB", function (err) {
    if (err) throw err;
    console.log("Database created");
  });
});
