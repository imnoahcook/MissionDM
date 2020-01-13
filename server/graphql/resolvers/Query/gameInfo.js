import { Game, Player, User } from '#root/db/models';

const gameInfoResolver = async (obj, { gameId }, context) => {
  const { userId } = context.res.locals.userSession.dataValues;
  if (!userId) throw new error('Invalid session (not logged in)');

  const user = await Player.findOne({
    where: { userId: userId, gameId: gameId },
  });
  if (!user) throw new error('User not found in game');

  const target = await User.findOne({
    where: { id: user.targetId },
  });
  if (!target) throw new error('Target not found in game');

  const game = await Game.findOne({
    where: { id: gameId },
  });
  if (!game) throw new error('Game not found');

  return GameInfo.create({ gameName: game.name, target: target });
};

export default gameInfoResolver;
