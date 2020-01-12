import { Game, Player } from '#root/db/models';

const gamesResolver = (obj, _, context) => {
  const { userId } = context.res.locals.userSession.dataValues;

  const players = Player.findAll({});
  return Game.findAll();
};

export default gamesResolver;
