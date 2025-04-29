const express = require("express");
const router = express.Router();
const { getTenders, getTenderById } = require("../services/tenderService");

// GET /api/tenders
router.get("/", async (req, res) => {
  try {
    const tenders = await getTenders();
    res.json({ data: tenders });
  } catch (error) {
    console.error("Tenders fetch error:", error?.message || error);
    res.status(500).json({ error: "Failed to fetch tenders" });
  }
});

// GET /api/tenders/:id
router.get("/:id", async (req, res) => {
  try {
    const tender = await getTenderById(req.params.id);
    res.json(tender);
  } catch (error) {
    res
      .status(500)
      .json({ error: `Failed to fetch tender ID ${req.params.id}` });
  }
});

module.exports = router;
