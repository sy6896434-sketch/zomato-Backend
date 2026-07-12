const { DataTypes } = require("sequelize");
const db = require("../Confiq/db");

const Category = db.define(
  "Category",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "categories",
    freezeTableName: true,
  }
);

module.exports = Category;