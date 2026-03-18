const db = require("./db");
const helper = require("../helper");
const config = require("../config");

async function getMultiple(page = 1, id) {
  const offset = helper.getOffset(page, config.listPerPage);
  let rows;

  if (id && id !== undefined) {
    rows = await db.query("SELECT * FROM mobs WHERE id = ?", [id]);
  } else {
    rows = await db.query("SELECT * FROM mobs LIMIT ?,?", [offset, config.listPerPage]);
  }

  const data = helper.emptyOrRows(rows);
  const meta = { page };

  return { data, meta };
}

module.exports = { getMultiple };
