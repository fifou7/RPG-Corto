const express = require("express");
const router = express.Router();
const { getPnj } = require("../services/getPnj");

router.get("/", async (req, res) => {
  try {
    const result = await getPnj();
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const result = await getPnj(req.params.id);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
