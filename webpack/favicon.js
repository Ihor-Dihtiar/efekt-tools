const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
module.exports = function () {
  return {
    plugins: [new FaviconsWebpackPlugin('./source/images/favicon.ico')],
  };
};
