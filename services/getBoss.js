const config = require("../config");
const mysql = require("mysql");

function getBoss() {
  return new Promise((resolve, reject) => {
    let con = mysql.createConnection(config.db);

    let sql = "SELECT * FROM boss LIMIT 1";

    con.query(sql, (err, result) => {
      con.end();
      if (err) reject(err);
      else resolve(result[0]);
    });
  });
}

module.exports = { getBoss };
