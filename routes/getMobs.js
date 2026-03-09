const express = require("express");
const router = express.Router();
const getMobs = require("../services/getMobs");

router.get("/{:id}", async function (req, res, next) {
  try {
    console.log(req.query.id);
    
    res.json(await getMobs.getMultiple(req.query.page, req.query.id));
  } catch (err) {
    console.error(`Error while getting the users`, err.message);
    next(err);
  }
});

module.exports = router;
