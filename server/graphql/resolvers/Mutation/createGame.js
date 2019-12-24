import { Game } from '#root/db/models';

const createGameResolver = (context, { name }) => {
  return Game.create({ name });
};

export default createGameResolver;
