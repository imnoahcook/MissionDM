import { addHours } from 'date-fns';

import { User, UserSession } from '#root/db/models';
import generateUUID from '#root/helpers/generateUUID';

const USER_SESSION_EXPIRY_HOURS = 1;

const setupRoutes = app => {
  app.post('/sessions', async (req, res, next) => {
    if (!req.body.fbid) {
      return next(new Error('Invalid body!'));
    }

    try {
      const user = await User.findOne({
        attributes: {},
        where: { fbid: req.body.fbid },
      });

      if (!user) return next(new Error('Invalid fbid!'));

      const expiresAt = addHours(new Date(), USER_SESSION_EXPIRY_HOURS);

      const sessionToken = generateUUID();

      const userSession = await UserSession.create({
        expiresAt,
        id: sessionToken,
        userId: user.id,
      });

      return res.json(userSession);
    } catch (e) {
      return next(e);
    }
  });

  app.delete('/sessions/:sessionId', async (req, res, next) => {
    try {
      const userSession = await UserSession.findByPk(req.params.sessionId);

      if (!userSession) return next(new Error('Invalid session ID'));

      await userSession.destroy();

      return res.end();
    } catch (e) {
      return next(e);
    }
  });

  app.get('/sessions/:sessionId', async (req, res, next) => {
    try {
      const userSession = await UserSession.findByPk(req.params.sessionId);

      if (!userSession) return next(new Error('Invalid session ID'));

      return res.json(userSession);
    } catch (e) {
      return next(e);
    }
  });

  app.post('/users', async (req, res, next) => {
    if (!req.body.fbid) {
      return next(new Error('Invalid body!'));
    }

    try {
      const newUser = await User.create({
        fbid: req.body.fbid,
        id: generateUUID(),
      });

      return res.json(newUser);
    } catch (e) {
      return next(e);
    }
  });

  app.get('/users/:userId', async (req, res, next) => {
    try {
      const user = await User.findByPk(req.params.userId);

      if (!user) return next(new Error('Invalid user ID'));

      return res.json(user);
    } catch (e) {
      return next(e);
    }
  });
};

export default setupRoutes;
