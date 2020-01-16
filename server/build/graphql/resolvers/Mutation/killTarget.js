"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _models = require("../../../db/models");

const killTarget = async (_, { gameId, password }, context) => {
  const { userId } = context.res.locals.userSession.dataValues;
  if (!userId) return false;

  const user = await _models.Player.findOne({
    where: { userId: userId, gameId: gameId } });


  if (!user.targetId) return false;

  const target = await _models.Player.findByPk(user.targetId);

  if (target.password === password) {
    await user.update({
      targetId: target.targetId,
      killCount: user.killCount + 1,
      killTime: Date() });


    target.update({ alive: false });

    return true;
  }
  return false;
};var _default =

killTarget;exports.default = _default;