import { Player } from '#root/db/models';

const gameInfoResolver = async (obj, {
  gameId
}, context) => {
  const {
    userId
  } = context.res.locals.userSession.dataValues;
  if (!userId) throw new Error('Invalid session (not logged in)');
  return Player.findOne({
    where: {
      userId: userId,
      gameId: gameId
    }
  });
};

export default gameInfoResolver;