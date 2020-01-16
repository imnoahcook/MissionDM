"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _models = require("../../../db/models");

const deleteUserSessionResolver = async (obj, { sessionId }, context) => {
  await _models.UserSession.findByPk(sessionId).then((UserSession) =>
  UserSession.destroy());


  context.res.clearCookie('userSessionId');

  return true;
};var _default =

deleteUserSessionResolver;exports.default = _default;