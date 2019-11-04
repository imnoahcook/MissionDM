const path = require('path');

module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'prettier/react'
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    "prettier/prettier": "error",
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      'webpack': {
        config: path.resolve(__dirname, './webpack.config.js')
      }
    },
  },
};