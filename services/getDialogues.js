const config = require("../config");
const mysql = require("mysql");

function getDialogues(npcId) {
  return new Promise((resolve, reject) => {
    let con = mysql.createConnection(config.db);
    let sql = "SELECT * FROM dialogues WHERE npc_id = ? ORDER BY step";
    let params = [npcId];

    con.query(sql, params, (err, result) => {
      con.end();
      if (err) reject(err);
      else resolve(result);
    });
  });
}

module.exports = { getDialogues };
