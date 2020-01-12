import { Player, Game } from '#root/db/models';
import generatePassword from '#root/helpers/generatePassword';
import { player } from '../Query';

const createPlayerResolver = async (_, { password }, context) => {
  const { userId } = context.res.locals.userSession.dataValues;
  if (!userId) return 'not logged in or invalid user session';

  const game = await Game.findOne({
    where: { password: password },
  });

  if (!game) throw new Error('invalid game password');

  const passpharse = generatePassword();

  const exists = Player.count({
    where: { userId: userId },
  }).then(count => count === 0);

  if (exists) throw new Error('player already exists in database');
  Player.create({ userId, gameId: game.id, password: passpharse });

  return game;
};

export default createPlayerResolver;
