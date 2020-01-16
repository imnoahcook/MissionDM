"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _models = require("../../../db/models");

const createTeamResolver = (context, { name, gameId }) => {
  return _models.Team.create({ name, gameId });
};var _default =

createTeamResolver;exports.default = _default;