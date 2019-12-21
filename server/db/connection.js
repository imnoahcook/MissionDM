import { Sequelize } from 'sequelize';

import accessEnv from '#root/helpers/accessEnv';

const DB_URL = accessEnv('DB_URL');

// console.log('@@ Got to here');

const sequelize = new Sequelize(DB_URL, {
  dialectOptions: {
    charset: 'uft8',
    multipleStatements: true,
  },
  dialect: 'mysql',
  logging: false,
});

export default sequelize;
