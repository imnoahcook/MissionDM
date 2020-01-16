"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _sequelize = require("sequelize");

const DB_URL = process.env.DB_URL;

const sequelize = new _sequelize.Sequelize(DB_URL, {
  dialectOptions: {
    charset: 'uft8',
    multipleStatements: true },

  dialect: 'mysql',
  logging: false });var _default =


sequelize;exports.default = _default;