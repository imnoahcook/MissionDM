import { Player, Game } from '#root/db/models';

const startGame = async (_, { gameId }, context) => {
  const { userId } = context.res.locals.userSession.dataValues;
  if (!userId) throw new Error('not logged in or invalid user session');

  const player = await Player.findOne({
    where: { userId: userId, gameId: gameId },
  });
  if (!player.admin) return false;

  const game = await Game.findByPk(gameId);
  if (game.isRunning) return false;

  game.update({ isRunning: true });
  //Call function to shuffle targets
  return true;
};

export default startGame;
