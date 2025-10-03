const express = require("express");
const mysql = require("mysql2");

const app = express();

// Create MySQL connection
const db = mysql.createConnection({
  host: "mysql-db",   // service name (important for Docker)
  user: "root",
  password: "",
  database: "devops"
});

db.connect(err => {
  if (err) {
    console.error("❌ MySQL connection error:", err);
    return;
  }
  console.log("✅ Connected to MySQL");
});

app.get("/", (req, res) => {
  db.query("SELECT NOW() as now", (err, results) => {
    if (err) {
      res.status(500).send(err);
      return;
    }
    res.send(`Hello! MySQL time is: ${results[0].now}`);
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
