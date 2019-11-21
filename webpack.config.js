const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { StatsWriterPlugin } = require('webpack-stats-plugin');

const src = path.resolve(__dirname, 'ui', 'src', 'js');
const dist = path.resolve(__dirname, 'ui', 'dist', 'ui');

module.exports = {
  context: __dirname,
  mode: 'development',
  entry: {
    home: path.resolve(src, 'home.js'),
    about: path.resolve(src, 'about.js'),
    list: path.resolve(src, 'list.js'),
    detail: path.resolve(src, 'detail.js'),
  },
  output: {
    path: dist,
    filename: '[name].[contenthash].js',
  },
  devtool: 'inline-source-map',
  plugins: [
    new CleanWebpackPlugin({ verbose: true }),
    new MiniCssExtractPlugin({ filename: '[name].[contenthash].css' }),
    new StatsWriterPlugin({
      filename: path.join('..', '..', 'assets.json'),
      fields: ['entrypoints'],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  optimization: {
    moduleIds: 'hashed',
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
    },
  },
};
