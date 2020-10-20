const path = require('path');

module.exports = {
  mode: 'development',

  entry: {
    index: './src/index.ts',
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/dist'
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
      },
    ],
  },
  resolve: {
    extensions: [
      '.ts', '.js',
    ],
  },

  devServer: {
    host: '0.0.0.0',
    port: '4000',
    contentBase: path.join(__dirname, 'dist')
  },
};
