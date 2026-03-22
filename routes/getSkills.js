const express = require("express");
const router = express.Router();
const { getSkills } = require("../services/getSkills");

router.get("/", async function (req, res, next) {
  try {
    res.json(await getSkills());
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async function (req, res, next) {
  try {
    res.json(await getSkills(req.params.id));
  } catch (err) {
    next(err);
  }
});

module.exports = router;