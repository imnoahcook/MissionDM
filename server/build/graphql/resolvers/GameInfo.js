"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _models = require("../../db/models");

const GameInfo = {
  target: async player => {
    const { userId, gameId } = player;

    const { targetId } = await _models.Player.findOne({
      where: { userId: userId, gameId: gameId } });


    if (!targetId) return null;

    const targetPlayer = await _models.Player.findByPk(targetId);
    if (!targetPlayer) throw new Error('Invalid Player Id');

    return _models.User.findByPk(targetPlayer.userId);
  },
  name: async player => {
    const game = await _models.Game.findByPk(player.gameId);

    return game.name;
  } };var _default =


GameInfo;exports.default = _default;