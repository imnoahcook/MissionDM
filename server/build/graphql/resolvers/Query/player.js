"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _models = require("../../../db/models");

const playerResolver = (context, { playerId }) => {
  return _models.Player.findAll({
    where: { id: playerId } });

};var _default =

playerResolver;exports.default = _default;