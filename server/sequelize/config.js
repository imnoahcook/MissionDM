const dotenv = require('dotenv');

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
