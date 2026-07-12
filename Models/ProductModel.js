const { DataTypes } = require("sequelize");
const db = require("../Confiq/db");

const Product = db.define(
  "Product",
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
    description: {
      type: DataTypes.TEXT,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    image: {
      type: DataTypes.TEXT,
    },
    isVeg: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    isBestseller: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    stock: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    active: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    categoryId: {
      type: DataTypes.INTEGER,
    },
    vendorId: {
      type: DataTypes.INTEGER,
    },
  },
  {
    tableName: "products",   // ✅ IMPORTANT
    freezeTableName: true,   // ✅ IMPORTANT
  }
);

module.exports = Product;