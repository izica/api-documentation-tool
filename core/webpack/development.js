const webpack = require('webpack');

module.exports = {
  entry: './core/index.js',
  output: {
    publicPath: '/',
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: './core/public',
    publicPath: '/',
    hot: true,
    open: true,
    overlay: {
      warnings: true,
      errors: true,
    },
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(css|scss)$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
};
