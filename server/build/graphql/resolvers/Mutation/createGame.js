"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _models = require("../../../db/models");
// import Player from '../Player';

const createGameResolver = async (_, { name, password, teams }, context) => {
  const { userId } = context.res.locals.userSession.dataValues;
  if (!userId) throw new Error('not logged in or invalid user session');

  const game = await _models.Game.create({ name, password, teams });
  _models.Player.create({
    userId,
    gameId: game.id,
    password: '',
    admin: true });


  return game;
};var _default =

createGameResolver;exports.default = _default;