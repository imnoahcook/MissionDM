import { Game } from '#root/db/models';

const Player = {
  game: async player => {
    return await Game.findByPk(player.gameId);
  },
};

export default Player;
