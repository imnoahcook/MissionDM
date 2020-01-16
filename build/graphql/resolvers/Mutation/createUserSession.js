import { User, UserSession } from '#root/db/models';
import generateUUID from '#root/helpers/generateUUID';
import { addHours } from 'date-fns';
const USER_SESSION_EXPIRY_HOURS = 1; // TODO: switch this to use sequelize findOrCreate

const createUserSessionResolver = async (obj, {
  fbid,
  name,
  imageurl
}, context) => {
  let user = await User.findOne({
    attributes: {},
    where: {
      fbid: fbid
    }
  });
  if (!user) user = await User.create({
    id: generateUUID(),
    fbid,
    name,
    imageurl
  });
  const expiresAt = addHours(new Date(), USER_SESSION_EXPIRY_HOURS);
  const sessionToken = generateUUID();
  const userSession = await UserSession.create({
    expiresAt,
    id: sessionToken,
    userId: user.id
  });
  context.res.cookie('userSessionId', userSession.id, {
    httpOnly: true
  });
  return userSession;
};

module.exports = createUserSessionResolver;