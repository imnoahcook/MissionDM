import Arr from '#root/db/models';
// console.log(Arr.Game);
const Game = Arr[0];
const gamesResolver = () => {
  return Game.findAll();
};
export default gamesResolver;
