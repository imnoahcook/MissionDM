"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _models = require("../../db/models");

const Player = {
  game: async player => {
    return await _models.Game.findByPk(player.gameId);
  } };var _default =


Player;exports.default = _default;