const Entry = require("../models/entryModel");

const getEntries = async (req, res) => {
  const entries = await Entry.getAllEntries();
  res.json({ entries });
};

const getEntry = async (req, res) => {
  try {
    const { id } = req.params;
    const entry = await Entry.getOneEntry(id);

    if (!entry) {
      return res.status(404).json({ error: "Entry not found" });
    }

    res.json({ entry });
  } catch (error) {
    console.error("Error getting entry:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};


const createEntry = async (req, res) => {
  const { user_id, title, content, mood } = req.body;

  if (!user_id || !title || !content || !mood) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    const entryId = await Entry.createEntry(user_id, title, content, mood);
    res.status(201).json({ success: true, entryId });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to create entry" });
  }
};

module.exports = { getEntries, createEntry, getEntry };
