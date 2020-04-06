import words from './wordlist';

const WORDS_LENGTH = words.length;

const generatePassword = () => {
  const word1 = words[Math.floor(Math.random() * WORDS_LENGTH)];
  const word2 = words[Math.floor(Math.random() * WORDS_LENGTH)];

  return word1 + ' ' + word2;
};

export default generatePassword;
