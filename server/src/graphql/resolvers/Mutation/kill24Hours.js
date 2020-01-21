import { Player } from '#root/db/models';

const kill24Hours = async (_, { gameId }, context) => {
  const { userId } = context.res.locals.userSession.dataValues;
  if (!userId) throw new Error('not logged in or invalid user session');

  const player = await Player.findOne({
    where: { userId: userId, gameId: gameId },
  });

  if (!player.admin) return false;

  const alivePlayers = await Player.findAll({
    where: { gameId: gameId, alive: true, admin: false },
  });
  const now = new Date();

  for (let i = 0; i < alivePlayers.length; ++i) {
    const time = alivePlayers[i].dataValues.killTime;
    if (!time || now - time > 86400000) {
      await alivePlayers[i].update({ alive: false });
    }
  }

  //randomize the targets when done

  return true;
};

export default kill24Hours;
