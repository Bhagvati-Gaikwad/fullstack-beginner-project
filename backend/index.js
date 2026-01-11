const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(express.json());

// In-memory data
let users = [];
let nextId = 1;

const cors = require("cors");
app.use(cors()); // Place this before your routes

// Test route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// CREATE User - POST /users
app.post("/users", (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: "Name and email are required" });
  }

  const user = { id: nextId++, name, email };
  users.push(user);

  res.status(201).json(user);
});

// READ Users - GET /users
app.get("/users", (req, res) => {
  res.json(users);
});

// UPDATE User - PUT /users/:id
app.put("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find(u => u.id === id);

  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

  user.name = req.body.name ?? user.name;
  user.email = req.body.email ?? user.email;

  res.json(user);
});

// DELETE User - DELETE /users/:id
app.delete("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = users.findIndex(u => u.id === id);

  if (index === -1) {
    return res.status(404).json({ error: "User not found" });
  }

  users.splice(index, 1);
  res.json({ message: "User deleted" });
});

// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
