module.exports = function({ config }) {
  config.module.rules.unshift({
    test: /\.stories\.jsx?$/,
    loaders: [],
    enforce: "pre"
  });

  return config;
};
