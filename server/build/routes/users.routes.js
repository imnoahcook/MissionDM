"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _dateFns = require("date-fns");

var _models = require("../db/models");
var _generateUUID = _interopRequireDefault(require("../helpers/generateUUID"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

const USER_SESSION_EXPIRY_HOURS = 1;

const setupRoutes = app => {
  app.post('/sessions', async (req, res, next) => {
    if (!req.body.fbid) {
      return next(new Error('Invalid body!'));
    }

    try {
      const user = await _models.User.findOne({
        attributes: {},
        where: { fbid: req.body.fbid } });


      if (!user) return next(new Error('Invalid fbid!'));

      const expiresAt = (0, _dateFns.addHours)(new Date(), USER_SESSION_EXPIRY_HOURS);

      const sessionToken = (0, _generateUUID.default)();

      const userSession = await _models.UserSession.create({
        expiresAt,
        id: sessionToken,
        userId: user.id });


      return res.json(userSession);
    } catch (e) {
      return next(e);
    }
  });

  app.delete('/sessions/:sessionId', async (req, res, next) => {
    try {
      const userSession = await _models.UserSession.findByPk(req.params.sessionId);

      if (!userSession) return next(new Error('Invalid session ID'));

      await userSession.destroy();

      return res.end();
    } catch (e) {
      return next(e);
    }
  });

  app.get('/sessions/:sessionId', async (req, res, next) => {
    try {
      const userSession = await _models.UserSession.findByPk(req.params.sessionId);

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
      const newUser = await _models.User.create({
        fbid: req.body.fbid,
        id: (0, _generateUUID.default)() });


      return res.json(newUser);
    } catch (e) {
      return next(e);
    }
  });

  app.get('/users/:userId', async (req, res, next) => {
    try {
      const user = await _models.User.findByPk(req.params.userId);

      if (!user) return next(new Error('Invalid user ID'));

      return res.json(user);
    } catch (e) {
      return next(e);
    }
  });
};var _default =

setupRoutes;exports.default = _default;