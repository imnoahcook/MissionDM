"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _models = require("../../db/models");

const UserSession = {
  user: async userSession => {
    return await _models.User.findByPk(userSession.userId);
  },
  games: async userSession => {
    const players = await _models.Player.findAll({
      where: { userId: userSession.userId } });

    const gameIds = players.map(player => player.gameId);

    return await _models.Game.findAll({
      where: { id: gameIds } });

  } };var _default =


UserSession;exports.default = _default;