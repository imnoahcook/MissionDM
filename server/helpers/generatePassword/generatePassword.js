const fs = require('fs');

const words = fs
  .readFileSync('./helpers/generatePassword/wordlist')
  .toString()
  .split('\n');

const generatePassword = () => {
  const word1 = Math.floor(Math.random() * 2048);
  const word2 = Math.floor(Math.random() * 2048);

  return words[word1] + ' ' + words[word2];
};

export default generatePassword;
