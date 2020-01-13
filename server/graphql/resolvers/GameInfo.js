import { User, Player } from '#root/db/models';

const GameInfo = {
  target: async player => {
    const { userId, gameId } = player;

    const { targetId } = await Player.findOne({
      where: { userId: userId, gameId: gameId },
    });

    if (!targetId) throw new Error('Invalid target Id');

    const targetPlayer = await Player.findByPk(targetId);
    if (!targetPlayer) throw new Error('Invalid Player Id');

    return User.findByPk(targetPlayer.userId);
  },
};

export default GameInfo;
