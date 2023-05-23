const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(express.json());

const users = [
  { id: 1, username: "admin", password: "admin" },
  { id: 2, username: "user", password: "user" },
];

app.get("/login", (req, res) => {
  res.render("login");
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (user) {
    res.redirect("/game");
  } else {
    res.status(401).json({ message: "Invalid username or password" });
  }
  console.log("Login successful");
});

app.use((req, res, next) => {
  console.log(req.method, req.path);
  next();
});

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/game", (req, res) => {
  res.render("game");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
