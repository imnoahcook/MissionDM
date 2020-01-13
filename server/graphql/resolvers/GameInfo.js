import { User, Player, Game } from '#root/db/models';

const GameInfo = {
  gameName: async (obj, { gameId }, context) => {
    const game = await Game.findByPk(gameId);
    return game.name;
  },
  target: async (obj, { gameId }, context) => {
    const { userId } = context.res.locals.userSession.dataValues;
    if (!userId) throw new error('Invalid session (not logged in)');
    const user = await Player.findOne({
      where: { userId: userId, gameId: gameId },
    });
    if (!user) throw new error('User not found in game');
    return User.findByPk(user.targetid);
  },
  password: async (obj, { gameId }, context) => {
    const { userId } = context.res.locals.userSession.dataValues;
    if (!userId) throw new error('Invalid session (not logged in)');
    const user = await Player.findOne({
      where: { userId: userId, gameId: gameId },
    });
    if (!user) throw new error('User not found in game');
    return user.password;
  },
};

export default GameInfo;
