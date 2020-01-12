import { Game, Player } from '#root/db/models';

const gamesResolver = async (obj, _, context) => {
  const { userId } = context.res.locals.userSession.dataValues;

  const players = await Player.findAll({
    where: { userId: userId },
  });

  if (!players) throw new Error('invalid user ID');

  const gameIds = players.map(player => player.gameId);
  return Game.findAll({
    where: { id: gameIds },
  });
};

export default gamesResolver;
