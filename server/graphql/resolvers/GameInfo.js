import { User, Player, Game } from '#root/db/models';

const GameInfo = {
  target: async player => {
    const { userId, gameId } = player;

    const { targetId } = await Player.findOne({
      where: { userId: userId, gameId: gameId },
    });

    if (!targetId) return null;

    const targetPlayer = await Player.findByPk(targetId);
    if (!targetPlayer) throw new Error('Invalid Player Id');

    return User.findByPk(targetPlayer.userId);
  },
  name: async player => {
    const game = await Game.findByPk(player.gameId);

    return game.name;
  },
};

export default GameInfo;
