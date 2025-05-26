const db = require("../config/db");

const getAllEntries = async () => {
  const [rows] = await db.query("SELECT * FROM entries");
  return rows;
};

const getOneEntry = async (id) => {
  const [rows] = await db.query("SELECT * FROM entries WHERE id = ?", [id]);
  return rows[0]; 
};

const createEntry = async (user_id, title, content, mood) => {
  const [result] = await db.query(
    `INSERT INTO entries (user_id, title, content, mood, created_at, updated_at)
     VALUES (?, ?, ?, ?, NOW(), NOW())`,
    [user_id, title, content, mood]
  );
  return result.insertId;
};

module.exports = { getAllEntries, createEntry, getOneEntry };
