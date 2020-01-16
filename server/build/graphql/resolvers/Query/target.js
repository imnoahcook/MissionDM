"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _models = require("../../../db/models");

const targetResolver = async (obj, { gameId }, context) => {
  const { userId } = context.res.locals.userSession.dataValues;
  if (!userId) return;

  const { targetId } = await _models.Player.findOne({
    where: { userId: userId, gameId: gameId } });


  if (!targetId) throw new Error('Invalid target Id');

  const targetPlayer = await _models.Player.findOne({
    where: { id: targetId } });


  if (!targetPlayer) throw new Error('Invalid Player Id');

  return _models.User.findByPk(targetPlayer.userId);
};var _default =

targetResolver;exports.default = _default;