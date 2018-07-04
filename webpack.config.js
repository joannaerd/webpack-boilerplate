const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/'
  },
  devServer: {
    contentBase: '/dist/',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src/js'),
        loader: 'babel-loader',
      },
      {
        test: /\.scss$/,
        use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']
      },
      {
        test: /\.(png|jpe?g|svg)$/,
        loader: 'file-loader',
        include: path.resolve(__dirname, 'src/assets/img'),
        options: {
          name: '[hash].[ext]',
          outputPath: 'img/',
          publicPath: 'img/'
        }
      },
      {
        test: /\.(html)$/,
        loader: 'html-loader',
      },
      {
        test: /\.(woff2?|ttf|otf|eot|svg)$/,
        loader: 'file-loader',
        include: path.resolve(__dirname, 'src/assets/fonts'),
        options: {
          name: '[hash].[ext]',
          outputPath: 'fonts/',
          publicPath: 'fonts/'
        }
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/html/index.html',
      filename: 'index.html'
    }),
    new OptimizeCssAssetsPlugin(),
  ]
};