const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const OptimizeCssnanoPlugin = require('@intervolga/optimize-cssnano-plugin');

module.exports = merge({
  customizeArray(common, prod, key) {
    if (key === 'plugins') {
      return [...common.slice(0, -1), ...prod, ...common.slice(-1)];
    }
    return undefined;
  },
  customizeObject(common, prod, key) {
    return undefined;
  },
})(common, {
  mode: 'production',
  devtool: 'source-map',
  plugins: [new OptimizeCssnanoPlugin({ sourceMap: true })],
});
