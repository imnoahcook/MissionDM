"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _models = require("../../../db/models");
var _randomizeTargets = _interopRequireDefault(require("./randomizeTargets"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

const startGame = async (_, { gameId }, context) => {
  const { userId } = context.res.locals.userSession.dataValues;
  if (!userId) throw new Error('not logged in or invalid user session');

  const player = await _models.Player.findOne({
    where: { userId: userId, gameId: gameId } });

  if (!player.admin) return false;

  const game = await _models.Game.findByPk(gameId);
  if (game.isRunning) return false;

  game.update({ isRunning: true });
  (0, _randomizeTargets.default)(_, { gameId }, context);
  return true;
};var _default =

startGame;exports.default = _default;