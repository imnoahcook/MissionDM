module.exports = {
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
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '#root': './server',
        },
      },
    ],
  ],

  retainLines: true,

  include: [/server/],
  ignore: [/node_modules/],
};
