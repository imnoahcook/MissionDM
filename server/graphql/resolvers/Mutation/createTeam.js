import { Team } from '#root/db/models';

const createTeamResolver = (context, { name }) => {
  return Team.create({ name });
};

export default createTeamResolver;
