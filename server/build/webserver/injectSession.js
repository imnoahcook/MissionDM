"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _models = require("../db/models");

const injectSession = async (req, res, next) => {
  if (req.cookies.userSessionId) {
    try {
      const userSession = await _models.UserSession.findByPk(req.cookies.userSessionId);

      if (!userSession) return next(new Error('Invalid session ID'));

      res.locals.userSession = userSession;
    } catch (e) {
      return next(e);
    }
  }

  return next();
};var _default =

injectSession;exports.default = _default;