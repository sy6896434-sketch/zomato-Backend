const { Sequelize } = require("sequelize");

const db = new Sequelize(process.env.MYSQL_URL, {
  dialect: "mysql",
  logging: false,
});

db.authenticate()
  .then(() => console.log("✅ Database Connected"))
  .catch((err) => console.error("❌ DB Error:", err));

module.exports = db;