import { Player } from '#root/db/models';

const killTarget = async (_, { gameId, password }, context) => {
  const { userId } = context.res.locals.userSession.dataValues;
  if (!userId) throw new Error('not logged in or invalid user session');

  const user = await Player.findOne({
    where: { userId: userId, gameId: gameId },
  });

  const target = await Player.findOne({
    where: { gameId: gameId, id: user.targetId },
  });

  if (target.password === password) {
    user.update({
      targetId: target.targetId,
      killCount: user.killCount + 1,
      killTime: Date(),
    });

    target.update({ alive: false });
    return true;
  }
  return false;
};

export default killTarget;
