const db = require("./db");
const helper = require("../helper");
const config = require("../config");

async function getMultiple(page = 1, id) {
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(`SELECT * FROM mobs WHERE id = ${id}`);
  const data = helper.emptyOrRows(rows);
  const meta = { page };

  return {
    data,
    meta,
  };
}

module.exports = {
  getMultiple,
};
