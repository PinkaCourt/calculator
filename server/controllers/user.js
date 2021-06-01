const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {
  getUserByEmail,
  createUserRecord,
  getUserData,
  genUserData,
} = require("../database");
const secret = require("../app.config").secret;

module.exports = {
  create(req, res) {
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
  },
  login(req, res) {
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
          const token = jwt.sign({ id: user.id }, secret, {
            expiresIn: 24 * 60 * 60 * 1000,
          });

          const { avatar, email, name } = user;

          return res.status(200).send({
            auth: true,
            accessToken: token,
            avatar,
            email,
            name,
          });
        }

        return res.status(403).json({ error: "user not authorized" });
      });
    });
  },
  getData(req, res) {
    const { userId } = req.query;

    if (!userId) {
      return res.status(400).json({ error: "userId not specified" });
    }

    getUserData(userId, (items) => {
      return res
        .status(200)
        .json({ message: `${items.length} records found`, items });
    });
  },
  mockData(req, res) {
    const { userId, sampleSize } = req.query;

    if (!userId) {
      return res.status(400).json({ error: "userId not specified" });
    }

    genUserData(userId, sampleSize);

    return res.status(200).json({ message: "Mock data created" });
  },
};
