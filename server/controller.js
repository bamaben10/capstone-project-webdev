require("dotenv").config();
const { CONNECTION_STRING } = process.env;
const Sequelize = require("sequelize");

const sequelize = new Sequelize(CONNECTION_STRING, {
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
});

module.exports = {
  getLogin: (req, res) => {
    sequelize
      .query(`SELECT * FROM users;`)
      .then((dbRes) => res.status(200).send(dbRes[0]))
      .catch((err) => console.log("GETTING", err));
  },
  createLogin: (req, res) => {
    const { text } = req.body;

    sequelize
      .query(`INSERT INTO users (text) VALUES ('${text})');`)
      .then((dbRes) => res.status(200).send(dbRes[0]))
      .catch((err) => console.log("POSTING", err));
  },
};
