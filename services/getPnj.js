const config = require("../config");
const mysql = require("mysql");

function getPnj(id) {
  return new Promise((resolve, reject) => {
    let con = mysql.createConnection(config.db);
    let sql = id ? "SELECT * FROM npc WHERE id = ?" : "SELECT * FROM npc";
    let params = id ? [id] : [];

    con.query(sql, params, (err, result) => {
      con.end();
      if (err) reject(err);
      else resolve(result);
    });
  });
}

module.exports = { getPnj };
