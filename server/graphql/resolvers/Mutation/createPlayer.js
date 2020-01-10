import { Player } from '#root/db/models';

const createPlayerResolver = (context, { gameId, teamId }) => {
  return Player.create({ gameId, teamId });
};

export default createPlayerResolver;
