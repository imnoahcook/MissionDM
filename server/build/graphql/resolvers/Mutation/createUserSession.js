"use strict";var _models = require("../../../db/models");
var _generateUUID = _interopRequireDefault(require("../../../helpers/generateUUID"));
var _dateFns = require("date-fns");function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

const USER_SESSION_EXPIRY_HOURS = 1;
// TODO: switch this to use sequelize findOrCreate
const createUserSessionResolver = async (
obj,
{ fbid, name, imageurl },
context) =>
{
  let user = await _models.User.findOne({
    attributes: {},
    where: { fbid: fbid } });


  if (!user)
  user = await _models.User.create({ id: (0, _generateUUID.default)(), fbid, name, imageurl });

  const expiresAt = (0, _dateFns.addHours)(new Date(), USER_SESSION_EXPIRY_HOURS);

  const sessionToken = (0, _generateUUID.default)();

  const userSession = await _models.UserSession.create({
    expiresAt,
    id: sessionToken,
    userId: user.id });


  context.res.cookie('userSessionId', userSession.id, { httpOnly: true });

  return userSession;
};

module.exports = createUserSessionResolver;