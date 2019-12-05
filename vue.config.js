const path = require('path');

const src = path.resolve(__dirname, 'ui', 'src');
const dist = path.resolve(__dirname, 'ui', 'dist');

const inject = false;
const minify = false;
const template = path.resolve(src, '_common', 'index.html');
const pages = {
  home: {
    entry: path.resolve(src, 'home', 'main.js'),
    filename: path.join('templates', 'ui', 'home.html'),
    title: 'Home',
    template,
    inject,
    minify,
  },
  about: {
    entry: path.resolve(src, 'about', 'main.js'),
    filename: path.join('templates', 'ui', 'about.html'),
    title: 'About',
    template,
    inject,
    minify,
  },
  list: {
    entry: path.resolve(src, 'list', 'main.js'),
    filename: path.join('templates', 'ui', 'list.html'),
    title: 'List',
    template,
    inject,
    minify,
  },
  detail: {
    entry: path.resolve(src, 'detail', 'main.js'),
    filename: path.join('templates', 'ui', 'detail.html'),
    title: 'Detail',
    template,
    inject,
    minify,
  },
};

module.exports = {
  pages,
  outputDir: path.resolve(dist, 'ui'),
  publicPath: '/static/ui/',
  chainWebpack: config => {
    config.resolve.alias.set('@', src);
    Object.keys(pages).forEach(page => {
      config.plugins.delete(`preload-${page}`);
      config.plugins.delete(`prefetch-${page}`);
    });
  },
  css: { sourceMap: true },
  devServer: {
    writeToDisk: filePath => {
      return /\.html$/.test(filePath);
    },
    proxy: { '/': { target: 'http://localhost:8000' } },
  },
};
