import { Player } from '#root/db/models';

const targetResolver = async (obj, { gameId }, context) => {
  const { userId } = context.res.locals.userSession.dataValues;
  if (!userId) return;

  const { targetId } = await Player.findOne({
    where: { userId: userId, gameId: gameId },
  });

  if (!targetId) return 'Invalid target Id';

  return Player.findOne({
    where: { id: targetId },
  });
};

export default targetResolver;