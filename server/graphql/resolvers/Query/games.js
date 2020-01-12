import { Game } from '#root/db/models';

const gamesResolver = (obj, _, context) => {
  const { userId } = context.res.locals.userSession.dataValues;
  return Game.findAll();
};

export default gamesResolver;
