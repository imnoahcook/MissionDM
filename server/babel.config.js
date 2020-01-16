module.exports = {
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '#root': './src',
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
  retainLines: true,

  include: [/src/],
  ignore: [/node_modules/],
};
