const path = require('path');

const ui = path.resolve(__dirname, 'ui');
const src = path.resolve(ui, 'src');
const dist = path.resolve(ui, 'dist');
const templates = path.join('templates', 'ui');

module.exports = {
  pages: {
    home: {
      entry: path.resolve(src, 'home', 'main.js'),
      filename: path.join(templates, 'home.html'),
    },
    about: {
      entry: path.resolve(src, 'about', 'main.js'),
      filename: path.join(templates, 'about.html'),
    },
    list: {
      entry: path.resolve(src, 'list', 'main.js'),
      filename: path.join(templates, 'list.html'),
    },
    detail: {
      entry: path.resolve(src, 'detail', 'main.js'),
      filename: path.join(templates, 'detail.html'),
    },
  },
  outputDir: path.resolve(dist, 'ui'),
  publicPath: '/static/ui/',
  configureWebpack: config => {
    config.resolve.alias['@'] = src;
  },
  css: { sourceMap: true },
};
