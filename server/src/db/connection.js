import { Sequelize } from 'sequelize';

const DB_URL = process.env.DB_URL;

const sequelize = new Sequelize(DB_URL, {
  dialectOptions: {
    charset: 'uft8',
    multipleStatements: true,
  },
  dialect: 'mysql',
  logging: false,
});

export default sequelize;
