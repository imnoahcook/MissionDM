"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _models = require("../../../db/models");
var _generateUUID = _interopRequireDefault(require("../../../helpers/generateUUID"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

const createUserResolver = async (context, { fbid }) => {
  const user = await _models.User.findOne({
    attributes: {},
    where: { fbid: fbid } });


  return user || _models.User.create({ id: (0, _generateUUID.default)(), fbid });
};var _default =

createUserResolver;exports.default = _default;