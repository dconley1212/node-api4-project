const express = require("express");
const cors = require("cors");

const server = express();

server.use(express.json());
server.use(cors());

const userData = [
  { id: 1, username: "rick" },
  { id: 2, username: "morty" },
  { id: 3, username: "beth" },
  { id: 4, username: "jerry" },
  { id: 5, username: "birdperson" },
];

const users = [
  { username: "rick", password: "sidfnlkahj" },
  { username: "morty", password: "dioafj" },
  { username: "beth", password: "riwklds" },
  { username: "jerry", password: "password" },
  { username: "birdperson", password: "kddabheik" },
  { username: "Summer", password: "lkjsdf" },
];

server.get("/api/users", (req, res) => {
  res.json(userData);
});

server.post("/api/register", (req, res) => {
  let newUser = { username: req.body.username, password: req.body.password };
  users.push(newUser);

  res.json(newUser);
});

server.post("/api/login", (req, res) => {
  const loginUser = users.filter((user) => {
    return (
      user.username === req.body.username && user.password === req.body.password
    );
  });
  if (loginUser) {
    res.json("Welcome to the jungle!");
  } else {
    res.status(404).json({ message: "incorrect login and password" });
  }
});

module.exports = server;
