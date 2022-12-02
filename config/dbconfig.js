const Sequelize = require("sequelize");
module.exports = new Sequelize({
  dialect: "mysql",
  username: "root",
  password: "mysql",
  host: "localhost",
  port: 3306,
  database: "pagination",
  logging: (log) => console.log("logging:"),
});
