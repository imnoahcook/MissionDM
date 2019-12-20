import { Sequelize } from 'sequelize';

import accessEnv from '#root/helpers/accessEnv';
import models from './models';

const DB_URL = accessEnv('DB_URL');

const sequelize = new Sequelize(DB_URL, {
  dialectOptions: {
    charset: 'uft8',
    multipleStatements: true,
  },
  logging: false,
  models,
});

export default sequelize;
