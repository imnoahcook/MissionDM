import { Game } from '#root/db/models';

const gamesResolver = () => {
  // return Game.findAll();
  return { message: 'somethin' };
};

export default gamesResolver;
