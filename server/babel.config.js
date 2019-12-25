module.exports = {
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '#root': './',
        },
      },
    ],
  ],
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
};
