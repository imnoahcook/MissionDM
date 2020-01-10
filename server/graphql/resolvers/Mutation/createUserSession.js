import { User, UserSession } from '#root/db/models';
import generateUUID from '#root/helpers/generateUUID';
import { addHours } from 'date-fns';

const USER_SESSION_EXPIRY_HOURS = 1;

const createUserSessionResolver = async (obj, { fbid }, context) => {
  const user = await User.findOne({
    attributes: {},
    where: { fbid: fbid },
  });

  if (!user) return new Error('Invalid fbid!');

  const expiresAt = addHours(new Date(), USER_SESSION_EXPIRY_HOURS);

  const sessionToken = generateUUID();

  const userSession = await UserSession.create({
    expiresAt,
    id: sessionToken,
    userId: user.id,
  });

  context.res.cookie('userSessionId', userSession.id, { httpOnly: true });

  return userSession;
};

module.exports = createUserSessionResolver;
