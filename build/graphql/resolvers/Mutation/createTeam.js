import { Team } from '#root/db/models';

const createTeamResolver = (context, {
  name,
  gameId
}) => {
  return Team.create({
    name,
    gameId
  });
};

export default createTeamResolver;