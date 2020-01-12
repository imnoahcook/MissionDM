import { Game, Player } from '#root/db/models';

const gamesResolver = async (obj, _, context) => {
  const { userId } = context.res.locals.userSession.dataValues;
  console.log(userId);
  const players = await Player.findAll({
    where: { userId: userId },
  });

  if (!players) return 'invalid user ID';

  const gameIds = players.map(player => player.gameId);
  return Game.findAll({
    where: { id: gameIds },
  });
};

export default gamesResolver;
