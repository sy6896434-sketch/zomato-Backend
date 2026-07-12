const Sequelize = require('sequelize');

const db = new Sequelize(
  process.env.MYSQLDATABASE,
  process.env.MYSQLUSER,
  process.env.MYSQLPASSWORD,
  {
    host: process.env.MYSQLHOST,
    port: process.env.MYSQLPORT,
    dialect: 'mysql',
    logging: false,
  }
);

db.authenticate()
  .then(() => console.log('✅ Database Connected Successfully'))
  .catch((err) => console.error('❌ Database Connection Failed:', err));

module.exports = db;