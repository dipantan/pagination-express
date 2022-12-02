var Sequelize = require("sequelize");
db = require("../config/dbconfig.js");

const data = db.define(
  "products",
  {
    productCode: {
      type: Sequelize.STRING,
      primaryKey: true,
    },
    productName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    productLine: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    productDescription: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    quantityInStock: {
      type: Sequelize.SMALLINT,
      allowNull: false,
    },
    buyPrice: {
      type: Sequelize.DECIMAL(10, 2),
      allowNull: false,
    },
    MSRP: {
      type: Sequelize.DECIMAL(10, 2),
      allowNull: false,
    },
  },
  {
    // This is to ensure that Sequelize
    // does not pluralize table names
    freezeTableName: true,

    // This is to ensure that Sequelize
    // does not add its own timestamp
    // variables in the query.
    timestamps: false,
    createdAt: false,
    updatedAt: false,
  }
);
module.exports = data;
