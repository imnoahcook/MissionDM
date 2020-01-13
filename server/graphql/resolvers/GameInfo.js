import { User, Player } from '#root/db/models';

const GameInfo = {
  target: async (_, { gameId }, context) => {
    const { userId } = context.res.locals.userSession.dataValues;
    if (!userId) throw new Error('Invalid session (not logged in)');

    const player = await Player.findOne({
      where: { userId: userId, gameId: gameId },
    });

    if (!player) throw new Error('User not found in game');
    return User.findByPk(player.targetid);
  },
};

export default GameInfo;
