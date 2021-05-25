const sqlite = require("sqlite3").verbose();

const dbPath = "db.sqlite";

const db = new sqlite.Database(dbPath, (err) => {
  if (err) {
    console.log("failed to open DB.\n", err);
    throw err;
  }

  db.run(
    `CREATE TABLE user (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name text, 
        email text UNIQUE, 
        password text, 
        avatar blob,
        CONSTRAINT email_unique UNIQUE (email)
        )`,
    (err) => {
      if (err) {
        console.log("Table exists or error happened.\n", err);
        return;
      }
    }
  );

  db.run(
    `CREATE TABLE customer (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    userId INTEGER,
    ds text,
    ans text,
    wtl text
    )`,
    (err) => {
      if (err) {
        console.log("Table exists or error happened.\n", err);
      }
    }
  );
});

module.exports = db;
