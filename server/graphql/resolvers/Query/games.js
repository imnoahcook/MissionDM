import Arr from '#root/db/models';

const Game = Arr[0];

const gamesResolver = () => {
  return Game.findAll();
};

export default gamesResolver;
