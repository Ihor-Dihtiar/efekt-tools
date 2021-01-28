module.exports = function () {
  return {
    module: {
      rules: [
        {
          test: /\.(jpg|png|svg|ico)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: 'images/[name].[ext]',
              },
            },
          ],
        },
      ],
    },
  };
};
