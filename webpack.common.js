const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const { StatsWriterPlugin } = require('webpack-stats-plugin');

const src = path.resolve(__dirname, 'ui', 'src');
const dist = path.resolve(__dirname, 'ui', 'dist');

module.exports = {
  context: __dirname,
  resolve: {
    alias: {
      '@': src,
    },
  },
  entry: {
    home: path.resolve(src, 'home', 'main.js'),
    about: path.resolve(src, 'about', 'main.js'),
    list: path.resolve(src, 'list', 'main.js'),
    detail: path.resolve(src, 'detail', 'main.js'),
  },
  output: {
    path: path.resolve(dist, 'ui'),
    filename: '[name].[contenthash].js',
  },
  plugins: [
    new CleanWebpackPlugin({ verbose: true }),
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({ filename: '[name].[contenthash].css' }),
    new StatsWriterPlugin({
      filename: path.join('..', '..', 'assets.json'),
      fields: ['entrypoints'],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.(sa|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                outputStyle: 'expanded',
              },
            },
          },
        ],
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
