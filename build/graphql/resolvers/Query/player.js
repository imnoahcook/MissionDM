import { Player } from '#root/db/models';

const playerResolver = (context, {
  playerId
}) => {
  return Player.findAll({
    where: {
      id: playerId
    }
  });
};

export default playerResolver;