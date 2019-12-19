module.exports = {
  presets: ['@babel/env'],
  plugins: [
    [
      "module-resolver",
      {
        alias: {
          "#root": "./server"
        }
      }
    ]
  ]
};
