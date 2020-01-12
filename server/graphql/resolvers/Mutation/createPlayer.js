import { Player, Game } from '#root/db/models';
import generatePassword from '#root/helpers/generatePassword';

const createPlayerResolver = async (_, { password }, context) => {
  const { userId } = context.res.locals.userSession.dataValues;
  if (!userId) throw new Error('not logged in or invalid user session');

  const game = await Game.findOne({
    where: { password: password },
  });

  if (!game) throw new Error('invalid game password');

  const exists = await Player.count({
    where: { userId: userId, gameId: game.id },
  }).then(count => {
    return count !== 0;
  });

  if (exists) throw new Error('player already exists in database');

  const passpharse = generatePassword();

  return Player.create({ userId, gameId: game.id, password: passpharse });
};

export default createPlayerResolver;
