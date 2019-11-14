const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const appSrc = path.join(__dirname, 'app', 'js');
const appDist = path.join(__dirname, 'app', 'static', 'app', 'js');

module.exports = {
  mode: 'development',
  entry: {
    home: path.join(appSrc, 'home.js'),
    about: path.join(appSrc, 'about.js'),
  },
  devtool: 'inline-source-map',
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['**/*', '!.gitkeep'],
      verbose: true,
    }),
  ],
  output: {
    path: appDist,
    filename: '[name].js',
  },
  optimization: {
    moduleIds: 'hashed',
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
};
