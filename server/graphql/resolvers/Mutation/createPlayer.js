import { Player, Game } from '#root/db/models';
import { generatePassword } from '#root/helpers/generatePassword';

const createPlayerResolver = async (_, { password }, context) => {
  const { userId } = context.res.locals.userSession.dataValues;
  if (!userId) return 'not logged in or invalid user session';

  console.log(password);
  const game = await Game.findOne({
    where: { password: password },
  });

  if (!game) return 'invalid game password';

  const passpharse = generatePassword();

  return Player.create({ userId, gameId: id, password: passpharse });
};

export default createPlayerResolver;
