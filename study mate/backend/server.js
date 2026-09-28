const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/tasks", (req, res) => {
  db.query("SELECT * FROM tasks", (err, result) => {
    if (err) return res.status(500).send(err.message);
    res.json(result);
  });
});

app.post("/tasks", (req, res) => {
  const { title, subject } = req.body;

  db.query(
    "INSERT INTO tasks (title, subject) VALUES (?, ?)",
    [title, subject],
    (err) => {
      if (err) return res.status(500).send(err.message);
      res.send("Task added");
    }
  );
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});