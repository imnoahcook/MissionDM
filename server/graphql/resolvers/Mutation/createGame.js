import { Game } from '#root/db/models';

const createGameResolver = (context, { name, password, teams }) => {
  return Game.create({ name, password, teams });
};

export default createGameResolver;
