import { Game, Player } from '#root/db/models';
// import Player from '../Player';

const createGameResolver = async (_, { name, password, teams }, context) => {
  const { userId } = context.res.locals.userSession.dataValues;
  if (!userId) throw new Error('not logged in or invalid user session');

  const game = await Game.create({ name, password, teams });
  Player.create({
    userId,
    gameId: game.id,
    password: '',
    admin: true,
  });

  return game;
};

export default createGameResolver;
