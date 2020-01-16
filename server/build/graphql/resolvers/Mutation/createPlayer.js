"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _models = require("../../../db/models");
var _generatePassword = _interopRequireDefault(require("../../../helpers/generatePassword"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

const createPlayerResolver = async (_, { password }, context) => {
  const { userId } = context.res.locals.userSession.dataValues;
  if (!userId) throw new Error('not logged in or invalid user session');

  const game = await _models.Game.findOne({
    where: { password: password } });


  if (!game) throw new Error('invalid game password');

  const exists = await _models.Player.count({
    where: { userId: userId, gameId: game.id } }).
  then(count => {
    return count !== 0;
  });

  if (exists) throw new Error('player already exists in database');

  const passpharse = (0, _generatePassword.default)();

  return _models.Player.create({ userId, gameId: game.id, password: passpharse });
};var _default =

createPlayerResolver;exports.default = _default;