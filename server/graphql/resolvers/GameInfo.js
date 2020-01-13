import { User, Player } from '#root/db/models';

const GameInfo = {
  target: async (_, { gameId }, context) => {
    const { userId } = context.res.locals.userSession.dataValues;
    if (!userId) return;

    const { targetId } = await Player.findOne({
      where: { userId: userId, gameId: gameId },
    });

    if (!targetId) throw new Error('Invalid target Id');

    const targetPlayer = await Player.findOne({
      where: { id: targetId },
    });
    if (!targetPlayer) throw new Error('Invalid Player Id');

    return User.findByPk(targetPlayer.userId);
  },
};

export default GameInfo;
