import { Player } from '#root/db/models';

const createPlayerResolver = (context, { name, gameId, teamId }) => {
  return Player.create({ name, gameId, teamId });
};

export default createPlayerResolver;
