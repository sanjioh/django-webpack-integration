import path from 'path';
import commonjs from 'rollup-plugin-commonjs';
import css from 'rollup-plugin-css-only';
import resolve from 'rollup-plugin-node-resolve';
import scss from 'rollup-plugin-scss';
import vue from 'rollup-plugin-vue';

const src = path.resolve(__dirname, 'ui', 'src');
const dist = path.resolve(__dirname, 'ui', 'dist');

export default [
  {
    input: path.resolve(src, 'about', 'main.js'),
    output: {
      file: path.resolve(dist, 'ui', 'about.js'),
      format: 'iife',
    },
    plugins: [resolve(), commonjs(), css()],
  },
  {
    input: path.resolve(src, 'home', 'main.js'),
    output: {
      file: path.resolve(dist, 'ui', 'home.js'),
      format: 'iife',
    },
    plugins: [resolve(), scss(), vue({ css: false })],
  },
];
