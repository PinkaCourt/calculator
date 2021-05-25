const express = require("express");
const bcrypt = require("bcrypt");
const db = require("./database");

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

const app = express();
app.use(express.json());
app.use(express.urlencoded());

var HTTP_PORT = 8000;

app.listen(HTTP_PORT, () => {
  console.log("Server running on port %PORT%".replace("%PORT%", HTTP_PORT));
});

app.get("/", (req, res, next) => {
  res.json({ message: "Ok" });
});

app.post("/user/login", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "No login or password" });
  }

  getUserByEmail(email, (user) => {
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    bcrypt.compare(password, user.password, (err, result) => {
      if (err) {
        console.log("Error while comparing passwords", err);
        return res.status(500).json({ error: "Failed to compare passwords" });
      }

      if (result) {
        return res.status(200).json({ message: "user authorized", user });
      }

      return res.status(403).json({ error: "user not authorized" });
    });
  });
});

app.post("/user/create", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "No login or password" });
  }

  createUserRecord(email, password, (user) => {
    if (!user) {
      return res.status(500).json({ error: "Error creating user" });
    }

    return res.status(200).json({ message: "user created" });
  });
});

app.use(function (req, res) {
  res.status(404);
});
