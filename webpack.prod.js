const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new OptimizeCssAssetsPlugin(),
    new ImageminPlugin({
      pngquant: {
        quality: '95-100',
      }
    })
  ]
});