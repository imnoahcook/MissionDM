const fs = require('fs');

const words = fs
  .readFileSync('./helpers/generatePassword/wordlist')
  .toString()
  .split('\n');

const FILE_LENGTH = words.length;

const generatePassword = () => {
  const word1 = words[Math.floor(Math.random() * FILE_LENGTH)];
  const word2 = words[Math.floor(Math.random() * FILE_LENGTH)];

  return word1 + ' ' + word2;
};

export default generatePassword;
