const Sequelize = require('sequelize');

const db = new Sequelize('zamato', 'root', 'Yadav@12345', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false,
});



module.exports = db;