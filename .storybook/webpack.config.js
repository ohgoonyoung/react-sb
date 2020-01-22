const path = require('path');

module.exports = ({ config, mode, env }) => {
  config.module.rules.push({
    test: /\.stories\.(js|mdx|jsx)?$/,
    loaders: [require.resolve('@storybook/source-loader')],
    enforce: 'pre',
  });

  return config;
};
