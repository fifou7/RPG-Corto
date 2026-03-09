const express = require("express");
const router = express.Router();
const getUsers = require("../services/getUser");
const { query } = require("../services/db");

router.get("/{:id}", async function (req, res, next) {
  try {
    console.log(req.query.id);
    
    res.json(await getUsers.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting the users`, err.message);
    next(err);
  }

});

module.exports = router;
