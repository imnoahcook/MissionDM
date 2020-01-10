import { UserSession } from '#root/db/models';

const injectSession = async (req, res, next) => {
  if (req.cookies.userSessionId) {
    try {
      const userSession = await UserSession.findByPk(req.cookies.userSessionId);

      if (!userSession) return next(new Error('Invalid session ID'));

      res.locals.userSession = userSession;
    } catch (e) {
      return next(e);
    }
  } else {
    // console.log('no cookie');
  }

  return next();
};

export default injectSession;
