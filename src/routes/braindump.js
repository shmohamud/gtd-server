const express = require("express");
const router = express.Router();
const braindumpsController = require("../controllers/braindump");

router.post("/create", async (req, res) => {
  try {
    const body = req.body;
    const braindump = await braindumpsController.createBraindump(body);
    res.status(200);
    res.json(braindump);
  } catch (err) {
    res.status(500);
  }
});

router.get("/", async (req, res) => {
  try {
    const braindumps = await braindumpsController.getBraindumps();
    res.json(braindumps);
    res.status = 200;
  } catch (err) {
    res.status(500);
  }
});

router.get("/:braindump_id", async (req, res) => {
  try {
    const { braindump_id } = req.params;
    const braindump = await braindumpsController.getBraindump(braindump_id);
    res.json(braindump);
    res.status = 200;
  } catch (err) {
    res.status(500);
  }
});

module.exports = router;
