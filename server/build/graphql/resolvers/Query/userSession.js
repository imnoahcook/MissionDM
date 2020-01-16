"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;const userSessionResolver = async (obj, args, context) => {
  if (args.me !== true) throw new Error('Unsupported argument value');
  return context.res.locals.userSession;
};var _default =

userSessionResolver;exports.default = _default;