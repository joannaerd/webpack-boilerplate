const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const path = require('path');
const StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    contentBase: '/dist/',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        include: path.resolve(__dirname, 'src/js'),
        loader: 'eslint-loader',
      },
    ],
  },
  plugins: [
    new StyleLintPlugin({}),
  ],
});