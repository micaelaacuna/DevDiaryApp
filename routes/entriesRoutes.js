const express = require("express");
const router = express.Router();
const {
  getEntries,
  getEntry,
  createEntry,
} = require("../controllers/entriesController");
const { getMain } = require("../controllers/indexController");

router.get("/", getMain);
router.get("/entries", getEntries);
router.get("/entries/:id", getEntry);
router.post("/entries", createEntry);

module.exports = router;
