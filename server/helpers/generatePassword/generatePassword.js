const fs = require('fs');

const words = fs
  .readFileSync('./helpers/generatePassword/wordlist')
  .toString()
  .split('\n');

const generatePassword = () => {
  const word1 = words[Math.floor(Math.random() * 2048)];
  const word2 = words[Math.floor(Math.random() * 2048)];

  return word1 + ' ' + word2;
};

export default generatePassword;
