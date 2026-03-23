const express = require("express");
const router = express.Router();
const { getBoss } = require("../services/getBoss");

router.get("/", async (req, res) => {
  try {
    const result = await getBoss();
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
