import { Player } from '#root/db/models';

const killTarget = async (_, { gameId, password }, context) => {
  const { userId } = context.res.locals.userSession.dataValues;
  if (!userId) return false;

  password = password.toLowerCase();

  const user = await Player.findOne({
    where: { userId: userId, gameId: gameId },
  });

  if (!user.targetId) return false;

  const target = await Player.findByPk(user.targetId);

  if (target.password === password) {
    await user.update({
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
