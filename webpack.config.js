const path = require('path');

module.exports = {
  entry: './src//app.js',
  output: {
    path: path.resolve(__dirname, 'public/'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  devServer: {
    contentBase: path.join(__dirname, 'public/'),
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.s?css$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  devtool: 'cheap-module-eval-source-map',
};
