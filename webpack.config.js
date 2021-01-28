const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const pug = require('./webpack/pug');
const devserver = require('./webpack/devserver');
const sass = require('./webpack/sass');
const extractCSS = require('./webpack/css.extract');
const css = require('./webpack/css');
const webpack = require('webpack');
const sourceMap = require('./webpack/sourceMap');
const images = require('./webpack/images');
const fonts = require('./webpack/fonts');
const babel = require('./webpack/babel');
// const favicon = require('./webpack/favicon');
const CleanWebpackPlugin = require('./webpack/cleanWebpackPlugin');

const fs = require('fs');

const PATHS = {
  source: path.join(__dirname, 'source'),
  docs: path.join(__dirname, 'docs'),
};

const PAGES_DIR = `${PATHS.source}/pages/`;
const PAGES = fs
  .readdirSync(PAGES_DIR)
  .filter((fileName) => fileName.endsWith('.pug'));

const common = merge([
  {
    entry: {
      index: path.join(PATHS.source, 'scripts', 'index.js'),
    },
    output: {
      path: PATHS.docs,
      filename: path.join('.', 'scripts', '[name].[contenthash].js'),
    },
    plugins: [
      // new HtmlWebpackPlugin({
      //   filename: 'index.html',
      //   // chunks: ['index', 'common'],
      //   template: path.join(PATHS.source, 'pages', 'index.pug'),
      // }),

      ...PAGES.map(
        (page) =>
          new HtmlWebpackPlugin({
            template: `${PAGES_DIR}/${page}`,
            filename: `./${page.replace(/\.pug/, '.html')}`,
          })
      ),
    ],
    // optimization: {
    //   splitChunks: {
    //     cacheGroups: {
    //       common: {
    //         minChunks: 2,
    //         chunks: 'all',
    //         name: 'common',
    //         priority: 10,
    //         enforce: true,
    //       },
    //     },
    //   },
    // },
  },
  pug(),
  images(),
  fonts(),
  babel(),
  CleanWebpackPlugin(),
]);

module.exports = function (env, argv) {
  if (argv.mode === 'production') {
    return merge([common, extractCSS()]);
    // return merge([common, extractCSS(), favicon()]);
  }
  if (argv.mode === 'development') {
    return merge([common, devserver(), extractCSS(), sourceMap()]);
    // return merge([common, devserver(), sass(), css(), favicon(), sourceMap()]);
  }
};
