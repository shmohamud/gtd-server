const express = require("express");
const router = express.Router();
const actionsController = require("../controllers/project");

router.get("/", async function (req, res) {
  try {
    const actions = await actionsController.getActions();
    res.status = 200;
    res.send(actions);
  } catch (err) {
    console.log("Error: ", err);
    res.status(500);
  }
});

module.exports = router;
