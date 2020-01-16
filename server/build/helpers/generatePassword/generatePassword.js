"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _fs = _interopRequireDefault(require("fs"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

const words = _fs.default.
readFileSync('./src/helpers/generatePassword/wordlist').
toString().
split('\n');

const FILE_LENGTH = words.length;

const generatePassword = () => {
  const word1 = words[Math.floor(Math.random() * FILE_LENGTH)];
  const word2 = words[Math.floor(Math.random() * FILE_LENGTH)];

  return word1 + ' ' + word2;
};var _default =

generatePassword;exports.default = _default;