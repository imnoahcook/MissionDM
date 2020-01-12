import { Player } from '#root/db/models';

const killTarget = async (_, { gameId, password }, context) => {
  console.log('Method called');
  const { userId } = context.res.locals.userSession.dataValues;
  if (!userId) throw new Error('not logged in or invalid user session');
  const target = await Player.findOne({
    where: { gameId: gameId, id: targetId },
  });

  if (target.password === password) {
    console.log('Correct');
    const user = await Player.findOne({
      where: { userId: userId, gameId: gameId },
    });

    user.update({
      targetId: target.targetId,
      killCount: killCount + 1,
      killTime: NOW(),
    });

    target.update({ alive: false });
    return true;
  }
  console.log('Incorrect');
  return false;
};

export default killTarget;
