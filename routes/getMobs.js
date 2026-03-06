const express = require("express");
const router = express.Router();
const getMobs = require("../services/getMobs");

router.get("/", async function (req, res, next) {
  try {
    res.json(await getMobs.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting the users`, err.message);
    next(err);
  }
});

module.exports = router;
