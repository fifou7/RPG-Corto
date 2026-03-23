const config = require("../config");
const mysql = require("mysql");

function getCharacters(id) {
  return new Promise((resolve, reject) => {
    const con = mysql.createConnection(config.db);
    let sql = id ? "SELECT * FROM characters WHERE id = ?" : "SELECT * FROM characters";
    let params = id ? [id] : [];
    con.query(sql, params, (err, result) => {
      con.end();
      if (err) reject(err);
      else resolve(result);
    });
  });
}

module.exports = { getCharacters };