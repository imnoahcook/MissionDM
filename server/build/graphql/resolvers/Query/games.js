"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _models = require("../../../db/models");

const gamesResolver = async (obj, _, context) => {
  const { userId } = context.res.locals.userSession.dataValues;

  const players = await _models.Player.findAll({
    where: { userId: userId } });


  const gameIds = players.map(player => player.gameId);
  return _models.Game.findAll({
    where: { id: gameIds } });

};var _default =

gamesResolver;exports.default = _default;