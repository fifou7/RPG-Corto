const express = require("express");
const router = express.Router();
const { getDialogues } = require("../services/getDialogues");

router.get("/:npcId", async (req, res) => {
  try {
    const result = await getDialogues(req.params.npcId);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
