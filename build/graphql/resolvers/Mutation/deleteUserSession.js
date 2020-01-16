import { UserSession } from '#root/db/models';

const deleteUserSessionResolver = async (obj, {
  sessionId
}, context) => {
  await UserSession.findByPk(sessionId).then(UserSession => UserSession.destroy());
  context.res.clearCookie('userSessionId');
  return true;
};

export default deleteUserSessionResolver;