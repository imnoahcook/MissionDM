const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

module.exports.development = {
  dialect: 'mysql',
  seederStorage: 'sequelize',
  url: process.env.DB_URL,
};

module.exports.production = {
  dialect: 'mysql',
  seederStorage: 'sequelize',
  url: process.env.DB_URL,
};
