const express = require("express");
const router = express.Router();
const getMobs = require("../services/getMobs");

router.get("/", async function (req, res, next) {
  try {
    res.json(await getMobs.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting mobs`, err.message);
    next(err);
  }
});

router.get("/:id", async function (req, res, next) {
  try {
    res.json(await getMobs.getMultiple(req.query.page, req.params.id));
  } catch (err) {
    console.error(`Error while getting mobs`, err.message);
    next(err);
  }
});

module.exports = router;
