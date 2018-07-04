const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    contentBase: '/dist/',
    publicPath: '/',
  },
  plugins: [
    new StyleLintPlugin({}),
  ],
});