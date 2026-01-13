const express = require("express");
const pool = require("../config/db");
const auth = require("../middleware/authMiddleware");
const router = express.Router();

router.get("/", auth, async (req, res) => {
  const tasks = await pool.query(
    "SELECT * FROM tasks WHERE user_id=$1",
    [req.user.id]
  );
  res.json(tasks.rows);
});

router.post("/", auth, async (req, res) => {
  const { title, description } = req.body;
  await pool.query(
    "INSERT INTO tasks (user_id,title,description) VALUES ($1,$2,$3)",
    [req.user.id, title, description]
  );
  res.json({ message: "Task added" });
});

router.delete("/:id", auth, async (req, res) => {
  await pool.query("DELETE FROM tasks WHERE id=$1", [req.params.id]);
  res.json({ message: "Task deleted" });
});

module.exports = router;
