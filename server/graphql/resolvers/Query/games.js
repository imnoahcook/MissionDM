import { Game } from '#root/db/models';

const gamesResolver = () => {
  return Game.findAll();
};

export default gamesResolver;
