const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "mg28rt23",
  database: "studymate"
});

db.connect(err => {
  if (err) throw err;
  console.log("Database connected");
});

module.exports = db;