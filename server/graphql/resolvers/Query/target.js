import { Player, User } from '#root/db/models';

const targetResolver = async (obj, { gameId }, context) => {
  const { userId } = context.res.locals.userSession.dataValues;
  if (!userId) return;

  const { targetId } = await Player.findOne({
    where: { userId: userId, gameId: gameId },
  });

  if (!targetId) return 'Invalid target Id';

  const targetPlayer = await Player.findOne({
    where: { id: targetId },
  });

  if (!targetPlayer) return 'Invalid Player Id';

  return User.findByPk(targetPlayer.userId);
};

export default targetResolver;
