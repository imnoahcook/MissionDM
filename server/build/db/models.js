"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.UserSession = exports.User = exports.Player = exports.Team = exports.Game = void 0;var _sequelize = require("sequelize");
var _connection = _interopRequireDefault(require("./connection"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

class Game extends _sequelize.Model {}exports.Game = Game;
Game.init(
{
  id: {
    type: _sequelize.Sequelize.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true },

  name: {
    type: _sequelize.Sequelize.STRING,
    unique: true },

  teams: _sequelize.Sequelize.BOOLEAN,
  password: {
    type: _sequelize.Sequelize.STRING,
    allowNull: true,
    unique: true },

  isRunning: {
    type: _sequelize.Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false } },


{
  sequelize: _connection.default,
  modelName: 'game' });



class Team extends _sequelize.Model {}exports.Team = Team;
Team.init(
{
  id: {
    type: _sequelize.Sequelize.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true },

  name: _sequelize.Sequelize.STRING,
  gameId: {
    type: _sequelize.Sequelize.INTEGER.UNSIGNED,
    references: {
      model: Game,
      key: 'id' },

    allowNull: false } },


{
  sequelize: _connection.default,
  modelName: 'team' });



class Player extends _sequelize.Model {}exports.Player = Player;
Player.init(
{
  id: {
    type: _sequelize.Sequelize.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true },

  userId: {
    allowNull: false,
    references: {
      key: 'id',
      model: 'users' },

    type: _sequelize.Sequelize.UUID },

  gameId: {
    type: _sequelize.Sequelize.INTEGER.UNSIGNED,
    references: {
      model: Game,
      key: 'id' },

    allowNull: false },

  teamId: {
    type: _sequelize.Sequelize.INTEGER.UNSIGNED,
    references: {
      model: Team,
      key: 'id' },

    allowNull: true },

  admin: {
    type: _sequelize.Sequelize.BOOLEAN,
    defaultValue: false },

  killCount: {
    type: _sequelize.Sequelize.INTEGER.UNSIGNED,
    defaultValue: 0 },

  killTime: {
    type: _sequelize.Sequelize.DATE,
    defaultValue: null,
    allowNull: true },

  targetId: {
    type: _sequelize.Sequelize.INTEGER.UNSIGNED,
    allowNull: true },

  alive: {
    type: _sequelize.Sequelize.BOOLEAN,
    defaultValue: true,
    allowNull: false },

  revived: {
    type: _sequelize.Sequelize.BOOLEAN,
    defaultValue: false,
    allowNull: false },

  password: {
    type: _sequelize.Sequelize.STRING,
    allowNull: false } },


{
  sequelize: _connection.default,
  modelName: 'player',
  targetId: {
    type: _sequelize.Sequelize.INTEGER.UNSIGNED,
    allowNull: true } });




class User extends _sequelize.Model {}exports.User = User;
User.init(
{
  id: {
    allowNull: false,
    primaryKey: true,
    type: _sequelize.Sequelize.UUID },

  fbid: {
    allowNull: false,
    type: _sequelize.Sequelize.STRING,
    unique: true },

  name: _sequelize.Sequelize.STRING,
  imageurl: {
    type: _sequelize.Sequelize.STRING,
    defaultValue:
    'https://www.guidedogs.org/wp-content/uploads/2019/11/website-donate-mobile.jpg' } },


{
  modelName: 'users',
  sequelize: _connection.default });



class UserSession extends _sequelize.Model {}exports.UserSession = UserSession;
UserSession.init(
{
  id: {
    allowNull: false,
    primaryKey: true,
    type: _sequelize.Sequelize.UUID },

  userId: {
    allowNull: false,
    references: {
      key: 'id',
      model: 'users' },

    type: _sequelize.Sequelize.UUID },

  expiresAt: {
    allowNull: false,
    type: _sequelize.Sequelize.DATE } },


{
  modelName: 'userSessions',
  paranoid: false,
  sequelize: _connection.default,
  updatedAt: false });