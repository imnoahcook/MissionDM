"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _models = require("../../../db/models");

const gameInfoResolver = async (obj, { gameId }, context) => {
  const { userId } = context.res.locals.userSession.dataValues;
  if (!userId) throw new Error('Invalid session (not logged in)');

  return _models.Player.findOne({
    where: { userId: userId, gameId: gameId } });

};var _default =

gameInfoResolver;exports.default = _default;