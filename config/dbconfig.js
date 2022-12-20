require("dotenv").config();
const Sequelize = require("sequelize");
module.exports = new Sequelize({
  dialect: "mysql",
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  host: process.env.DB_HOST,
  port: process.env.PORT,
  database: process.env.DB_NAME,
});
