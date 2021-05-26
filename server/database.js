const sqlite = require("sqlite3").verbose();
const bcrypt = require("bcrypt");

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
    wtl text,
    date INTEGER
    )`,
    (err) => {
      if (err) {
        console.log("Table exists or error happened.\n", err);
      }
    }
  );
});

const createUserRecord = (email, password, cb) => {
  bcrypt.hash(password, 2, (err, hash) => {
    if (err) {
      console.log("Error during hashing", err);
      return false;
    }

    const sql =
      "INSERT INTO user (name, email, password, avatar) values(?,?,?,?)";

    return db.run(sql, [null, email, hash, null], (err, rows) => {
      if (err) {
        console.log("An error occured.\n", err);
        return false;
      }

      cb(true);
    });
  });
};

const getUserByEmail = (email, cb) => {
  const sql = `SELECT * from user where email='${email}'`;

  return db.get(sql, (err, rows) => {
    if (err) {
      console.log("Error executing SQL.\n", sql, err);
      return;
    }

    cb(rows);
    return rows;
  });
};

const genUserData = (userId, sampleSize) => {
  if (!userId) {
    return;
  }

  const mockData = Array.from(Array(sampleSize)).map(() => {
    return [
      userId,
      Math.random() * 20,
      Math.random() * 2,
      Math.random() * 100,
      new Date(Date.now() - 7776000000 * Math.random()), // Mock data from now to - 3 months ago
    ];
  });

  const sql = db.prepare(
    "INSERT INTO customer (userId, ds, ans, wtl, date) VALUES (?,?,?,?,?)"
  );

  mockData.forEach((item) => sql.run(item));

  sql.finalize();
};

const getUserData = (userId, cb) => {
  const sql = `SELECT * FROM customer where userId='${userId}'`;

  db.all(sql, (err, rows) => {
    if (err) {
      console.log("Error from executing : ", sql, "\n", err);
    }

    cb(rows);
  });
};

// genUserData("foo@bar.com", 1000);

module.exports = { db, getUserByEmail, createUserRecord, getUserData };
