const express = require("express");
const router = express.Router();
const { getCharacters } = require("../services/getCharacters");

router.get("/", async (req, res) => {
  try {
    const result = await getCharacters();
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const result = await getCharacters(req.params.id);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
