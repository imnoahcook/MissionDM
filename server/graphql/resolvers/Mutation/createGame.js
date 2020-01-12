import { Game, Player } from '#root/db/models';
// import Player from '../Player';

const createGameResolver = (_, { name, password, teams }, context) => {
  const { userId } = context.res.locals.userSession.dataValues;
  if (!userId) throw new Error('not logged in or invalid user session');

  const game = Game.create({ name, password, teams });
  const player = Player.create({
    userId,
    gameId: game.id,
    password: '',
    admin: true,
  });

  console.log(player);

  return game;
};

export default createGameResolver;
