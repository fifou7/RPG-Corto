const config = require("../config");
const mysql = require("mysql");

function getSkills(id) {
  return new Promise((resolve, reject) => {
    const con = mysql.createConnection(config.db);
    let sql = id ? "SELECT * FROM skills WHERE id = ?" : "SELECT * FROM skills";
    let params = id ? [id] : [];
    con.query(sql, params, (err, result) => {
      con.end();
      if (err) reject(err);
      else resolve(result);
    });
  });
}

module.exports = { getSkills };