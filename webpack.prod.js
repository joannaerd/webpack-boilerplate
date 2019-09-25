const { basename } = require('path');

const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new FaviconsWebpackPlugin({
      logo: './src/assets/img/logo.svg',
      publicPath: '/',
      outputPath: '/static',
      prefix: '/static',
      favicons: {
        appName: 'webpack-boilerplate',
        appDescription: 'Webpack boilerplate',
        developerName: 'Joanna Erd',
        developerURL: null, // prevent retrieving from the nearest package.json
        background: '#fff',
        theme_color: '#F29B44',
      },
      inject: htmlPlugin =>
        basename(htmlPlugin.options.filename) === 'index.html',
    }),
    new OptimizeCssAssetsPlugin(),
    new ImageminPlugin({
      pngquant: {
        quality: '95-100',
      }
    })
  ],
});
