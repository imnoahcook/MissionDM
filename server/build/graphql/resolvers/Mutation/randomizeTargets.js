"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _models = require("../../../db/models");

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const randomizeTargets = async (_, { gameId }, context) => {
  const { userId } = context.res.locals.userSession.dataValues;
  if (!userId) throw new Error('not logged in or invalid user session');

  const player = await _models.Player.findOne({
    where: { userId: userId, gameId: gameId } });


  if (!player.admin) return false;

  const alivePlayers = await _models.Player.findAll({
    where: { gameId: gameId, alive: true, admin: false } });


  shuffle(alivePlayers);

  for (let i = 0; i < alivePlayers.length - 1; ++i) {
    const newTarget = alivePlayers[i + 1].dataValues.id;
    await alivePlayers[i].update({ targetId: newTarget });
  }
  const firstTarget = alivePlayers[0].dataValues.id;
  await alivePlayers[alivePlayers.length - 1].update({
    targetId: firstTarget });


  return true;
};var _default =

randomizeTargets;exports.default = _default;